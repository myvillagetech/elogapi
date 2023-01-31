import {
    BadRequestException,
    HttpException,
    HttpStatus,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Types } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import {
    addOrganizationsToUserDto,
    addUsersToOrganizationDto,
    removeOrganizationsfromUserDto,
    removeUsersfromOrganizationDto,
    UserDto,
    UserUpdateDto,
} from './dto/user.dto';
import { UserSearchCriteriaDto } from './dto/user.searchCriteria.dto';
import { UserDocument } from './schemas/user.schemas';
import * as bcrypt from 'bcrypt';
import { ResetPasswordDto } from './dto/resetPassword.dto';
import { UserActivityLogDocument } from './schemas/user.activitylog';
import * as dayjs from 'dayjs';

@Injectable()
export class UsersService {
    @InjectModel(MODEL_ENUMS.USERS) private usersModel: Model<UserDocument>;
    @InjectModel(MODEL_ENUMS.USERS_ACTIVITY_LOG)
    private userActivityLogsModel: Model<UserActivityLogDocument>;
    constructor() {}

    addOrganizationToUser(userId, orgId) {
        return this.usersModel.updateOne(
            {
                _id: new mongoose.Types.ObjectId(userId),
            },
            {
                $push: { organization:  new mongoose.Types.ObjectId(orgId) }
            },
        );
    }

    /**
     * To create new user
     * @param createUserDto new user data to create a new user
     * @returns the new user
     */
    async createUser(createUserDto: UserDto): Promise<UserDocument> {
        const hasedPassword = await this.generatePassword(
            createUserDto.password,
        );
        createUserDto.password = hasedPassword;
        const newUser = await new this.usersModel(createUserDto);
        return newUser.save();
    }

    /**
     * to update the existing User
     * @param id userId
     * @param updateUserDTO new data to update the user
     * @returns the update user details
     */
    async updateUser(
        id: string,
        updateUserDTO: UserUpdateDto,
    ): Promise<UserDocument> {
        if (updateUserDTO.password) {
            const hasedPassword = await this.generatePassword(
                updateUserDTO.password,
            );
            updateUserDTO.password = hasedPassword;
        }
        const existingUser = await this.usersModel.findByIdAndUpdate(
            id,
            updateUserDTO,
            { new: true },
        );
        if (!existingUser) {
            throw new NotFoundException(`user #${id} not found`);
        }
        return existingUser;
    }

    /**
     * To get particular User Details
     * @param id userId
     * @returns the user details with the requested Id
     */
    async getUserById(id: string): Promise<UserDocument> {
        const existingUser = await this.usersModel.findById(id);
        if (!existingUser) {
            throw new NotFoundException(`user with ${id} is not found`);
        }
        return existingUser;
    }

    /**
     * to get all users Data
     * @returns the all users data
     */
    async getAllUsers(): Promise<UserDocument[]> {
        const userData = await this.usersModel.find();
        if (!userData || userData.length == 0) {
            throw new NotFoundException('users data not found!');
        }
        return userData;
    }

    /**
     * To delete particular User
     * @param id User Id to delete the user
     * @returns the deleted user details
     */
    async deleteUser(id: string): Promise<UserDocument> {
        const deletedUser = await this.usersModel.findByIdAndDelete(id);
        if (!deletedUser) {
            throw new NotFoundException(`user #${id} not found`);
        }
        return deletedUser;
    }

    /**
     * This is to get user details with email
     * @param email user Email
     * @returns the user details of that email
     */
    async getUserByEmail(email: string): Promise<UserDocument> {
        const user = await this.usersModel.findOne({ email: email }).exec();
        if (!user) {
            throw new NotFoundException(`user with ${email} is not found`);
        }

        return user;
    }

    /**
     * This is to update only the wanted user details
     * @param email user Email to find user
     * @param object is details that to update
     * @returns the updated user details
     */
    async updateUserByEmail(email: string, object: any): Promise<UserDocument> {
        const existingUser = await this.usersModel.findOneAndUpdate(
            { email: email },
            object,
            { new: true },
        );
        if (!existingUser) {
            throw new NotFoundException(`user not found`);
        }
        return existingUser;
    }

    async getUsersByorganizationId(
        organizationId: string,
    ): Promise<UserDocument[]> {
        const users = await this.usersModel.find({
            organization: organizationId,
        });
        if (!users || users.length == 0) {
            throw new NotFoundException('users data not found!');
        }
        return users;
    }

    // async updateUserPassword(userId: string, newPassword: string): Promise<UserDocument> {
    //     const user = await this.usersModel.findByIdAndUpdate(userId, { password: newPassword });

    //     if (!user) {
    //         throw new NotFoundException(`user with ${userId} is not found`)
    //     }

    //     return user;
    // }

    async usersSearchCriteria(criteria: UserSearchCriteriaDto): Promise<any> {
        const search = { $and: [] };

        if (criteria.user) {
            search.$and.push({
                Name: new RegExp(criteria.user.toString(), 'i'),
            });
        }

        if (criteria.role) {
            search.$and.push({
                roles: criteria.role,
            });
        }

        if (criteria.isActive !== null && criteria.isActive !== undefined) {
            search.$and.push({ isActive: criteria.isActive });
        }

        if (criteria.userId) {
            search.$and.push({
                _id: new Types.ObjectId(criteria.userId),
            });
        }

        if (criteria.type) {
            search.$and.push({
                'organizationsdata.type': criteria.type,
            });
        }

        if (criteria.organizationSerach) {
            search.$and.push({
                'organizationsdata.organization': new RegExp(
                    criteria.organizationSerach.toString(),
                    'i',
                ),
            });
        }

        const paginationProps: any = [
            { $match: search.$and.length > 0 ? search : {} },
        ];

        if (
            (criteria.pageSize || criteria.pageSize > 0) &&
            (criteria.pageNumber || criteria.pageNumber === 0)
        ) {
            paginationProps.push({
                $skip: criteria.pageNumber * criteria.pageSize,
            });
            paginationProps.push({ $limit: criteria.pageSize });
        }

        let sortObject;
        if (criteria.sortField) {
            sortObject = {};
            sortObject[criteria.sortField] = criteria.sortOrder;
            paginationProps.push({ $sort: sortObject });
        }

        const metrics = await this.usersModel.aggregate([
            {
                $lookup: {
                    from: MODEL_ENUMS.ORGANIZATIONS,
                    localField: 'organization',
                    foreignField: '_id',
                    as: 'organizationsdata',
                },
            },
            {
                $facet: {
                    active: [
                        { $match: { isActive: true } },
                        { $count: 'activeUsers' },
                    ],
                    inActive: [
                        { $match: { isActive: false } },
                        { $count: 'inActiveUsers' },
                    ],
                    ministries: [
                        {
                            $match: {
                                'organizationsdata.type':
                                    '63973bfb61ab6f49bfdd3c35',
                                isActive: true,
                            },
                        },
                        { $count: 'ministriesCount' },
                    ],
                    associations: [
                        {
                            $match: {
                                'organizationsdata.type':
                                    '63973c8961ab6f49bfdd3c38',
                                isActive: true,
                            },
                        },
                        { $count: 'associationCount' },
                    ],
                },
            },
        ]);

        const results = await this.usersModel.aggregate([
            {
                $lookup: {
                    from: MODEL_ENUMS.ORGANIZATIONS,
                    localField: 'organization',
                    foreignField: '_id',
                    as: 'organizationsdata',
                },
            },
            {
                $facet: {
                    users: paginationProps,
                    metrics: [
                        { $match: search.$and.length > 0 ? search : {} },
                        { $count: 'totalCount' },
                    ],
                },
            },
        ]);

        if (!results || results.length == 0) {
            throw new HttpException(`Users not found`, HttpStatus.NOT_FOUND);
        }
        return { results, metrics };
    }

    async removeUsersFormOrganization(
        updateDetails: removeUsersfromOrganizationDto,
    ): Promise<any> {
        const result = await this.usersModel.updateMany(
            { _id: updateDetails.userIds },
            { $pull: { organization: updateDetails.organizationId } },
        );

        if (!result) {
            throw new NotFoundException(`users not found`);
        }

        return result;
    }

    async removeOrganizationsFormUser(
        updateDetails: removeOrganizationsfromUserDto,
    ): Promise<any> {
        const result = await this.usersModel.updateOne(
            { _id: updateDetails.userId },
            { $pull: { organization: { $in: updateDetails.organizationIds } } },
        );

        if (!result) {
            throw new NotFoundException(`Organizations not found`);
        }

        return result;
    }

    async addUsersToOrganization(
        updateDetails: addUsersToOrganizationDto,
    ): Promise<any> {
        const result = await this.usersModel.updateMany(
            { _id: updateDetails.userIds },
            { $push: { organization: updateDetails.organizationId } },
        );

        if (!result) {
            throw new NotFoundException(`users not found`);
        }

        return result;
    }

    async getUserMetrics(): Promise<any> {
        const result = await this.usersModel.aggregate([
            {
                $lookup: {
                    from: MODEL_ENUMS.USERS_ACTIVITY_LOG,
                    localField: '_id',
                    foreignField: 'user',
                    as: 'useractivitylogs',
                },
            },
            // { $unwind: { path: '$useractivitylogs' } },
            {
                $facet: {
                    // activeUsers: [{ $match: { isActive: true } }],
                    active: [
                        { $match: { isActive: true } },
                        { $count: 'active' },
                    ],
                    inActive: [
                        { $match: { isActive: false } },
                        { $count: 'inActive' },
                    ],
                    moreThanOneOrg: [
                        {
                            $match: {
                                $and: [
                                    { organization: { $exists: true } },
                                    { 'organization.1': { $exists: true } },
                                ],
                            },
                        },
                        { $count: 'moreThanOneOrg' },
                    ],
                    activeLast24Hours: [
                        {
                            $match: {
                                'useractivitylogs.updatedAt': {
                                    $gt: dayjs().subtract(24, 'h').toDate(),
                                },
                            },
                        },
                        { $count: 'activeLast24Hours' },
                    ],
                },
            },
            {
                $addFields: {
                    active: {
                        $arrayElemAt: ['$active', 0],
                    },
                    inActive: {
                        $arrayElemAt: ['$inActive', 0],
                    },
                    moreThanOneOrg: { $arrayElemAt: ['$moreThanOneOrg', 0] },
                    activeLast24Hours: {
                        $arrayElemAt: ['$activeLast24Hours', 0],
                    },
                },
            },
            {
                $addFields: {
                    active: '$active.active',
                    inActive: '$inActive.inActive',
                    moreThanOneOrg: '$moreThanOneOrg.moreThanOneOrg',
                    activeLast24Hours: '$activeLast24Hours.activeLast24Hours',
                },
            },
        ]);

        return result;
    }

    async addOrganizationsToUsers(
        updateDetails: addOrganizationsToUserDto,
    ): Promise<any> {
        const result = await this.usersModel.updateOne(
            { _id: updateDetails.userId },
            { $push: { organization: updateDetails.organizationIds } },
        );

        if (!result) {
            throw new NotFoundException(`users not found`);
        }

        return result;
    }

    async userResetPassword(
        resetPasswordDetails: ResetPasswordDto,
    ): Promise<any> {
        const user = await this.usersModel.findById(
            resetPasswordDetails.userId,
        );
        if (!user) {
            throw new NotFoundException(
                `User with ${resetPasswordDetails.userId} is Not found`,
            );
        }
        const verifyUser: any = await this.verifyPassword(
            resetPasswordDetails.oldPassword,
            user.password,
        );
        if (!verifyUser) {
            throw new BadRequestException(
                'Invaild Password ! Please tryn again with correct password',
            );
        }
        const hashedPassword = await this.generatePassword(
            resetPasswordDetails.newPassword,
        );
        const result = await this.usersModel.findByIdAndUpdate(
            resetPasswordDetails.userId,
            { password: hashedPassword },
        );
        return result;
    }

    /**
     * it will genrate the hashed password
     * @param password user Password
     * @returns the hashed password
     */
    async generatePassword(password: string): Promise<any> {
        const hash = await bcrypt.hashSync(password, 10);
        return hash;
    }

    /**
     * this is to verify unhashed password and hashed password
     * @param password unhased password
     * @param hashedPassword allready hashed and stored password
     * @returns a boolean true or false;
     */
    async verifyPassword(
        password: string,
        hashedPassword: string,
    ): Promise<any> {
        const result = await bcrypt.compareSync(password, hashedPassword);
        return result;
    }

    async logUserActvity(user) {
        await this.userActivityLogsModel.findOneAndUpdate(
            { user: user._id },
            { user: user._id, organization: user.organization },
            { upsert: true },
        );
    }
}
