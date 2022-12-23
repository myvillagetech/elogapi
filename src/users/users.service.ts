import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { updateUsersOrganizationDto, UserDto, UserUpdateDto } from './dto/user.dto';
import { UserSearchCriteriaDto } from './dto/user.searchCriteria.dto';
import { UserDocument } from './schemas/user.schemas'

@Injectable()
export class UsersService {
    @InjectModel(MODEL_ENUMS.USERS) private usersModel: Model<UserDocument>
    constructor() {
    }

    /**
     * To create new user 
     * @param createUserDto new user data to create a new user
     * @returns the new user 
     */
    async createUser(createUserDto: UserDto): Promise<UserDocument> {
        const newUser = await new this.usersModel(createUserDto);
        return newUser.save();
    }

    /**
     * to update the existing User
     * @param id userId 
     * @param updateUserDTO new data to update the user
     * @returns the update user details
     */
    async updateUser(id: string, updateUserDTO: UserUpdateDto): Promise<UserDocument> {
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
            throw new NotFoundException(`user with ${id} is not found`)
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
    async updateUserByEmail(
        email: string,
        object: any,
    ): Promise<UserDocument> {
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

    async getUsersByorganizationId(organizationId: string): Promise<UserDocument[]> {
        const users = await this.usersModel.find({ organization: organizationId });
        if (!users || users.length == 0) {
            throw new NotFoundException('users data not found!');
        }
        return users;
    }

    async updateUserPassword(userId: string, newPassword: string): Promise<UserDocument> {
        const user = await this.usersModel.findByIdAndUpdate(userId, { password: newPassword });

        if (!user) {
            throw new NotFoundException(`user with ${userId} is not found`)
        }

        return user;
    }

    async usersSearchCriteria(criteria: UserSearchCriteriaDto): Promise<UserDocument[]> {
        const search = { $and: [] }

        if (criteria.user) {
            search.$and.push({
                Name: new RegExp(criteria.user.toString(), 'i')
            })
        }

        if (criteria.role) {
            search.$and.push({
                roles: criteria.role
            })
        }

        if (criteria.isActive !== null && criteria.isActive !== undefined) {
            search.$and.push(
                { isActive: criteria.isActive },
            )
        }

        if (criteria.userId) {
            search.$and.push(
                {
                    "_id": new Types.ObjectId(criteria.userId)
                }
            )
        }

        if(criteria.type) {
            search.$and.push({
                "organizationsdata.type" : criteria.type
            })
        }

        let paginationProps: any = [
            { $match: search.$and.length > 0 ? search : {} }
        ];

        if ((criteria.pageSize || criteria.pageSize > 0) &&
            (criteria.pageNumber || criteria.pageNumber === 0)) {
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
                        { $count: "totalCount" },
                    ],
                },
            },
        ])

        if (!results || results.length == 0) {
            throw new HttpException(
                `Users not found`,
                HttpStatus.NOT_FOUND
            )
        }
        return results;

    }

    async removeOrganizationFormUsers(updateDetails : updateUsersOrganizationDto) : Promise<any>{
        const result = await this.usersModel.updateMany(
            {'_id ': {$in :[updateDetails.userIds]}},
            {$pull : {'organization' : updateDetails.organizationId}}
        );

        if (!result) {
            throw new NotFoundException(`users not found`)
        }

        return result;
    }
}
