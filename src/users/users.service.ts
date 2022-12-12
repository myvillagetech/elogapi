import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { UserDto } from './dto/user.dto';
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
    async updateUser(id: string, updateUserDTO: UserDto): Promise<UserDocument> {
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

    async getUsersByorganizationId(organizationId : string) :   Promise<UserDocument[]>{
        const users = await this.usersModel.find({organization : organizationId});
        if (!users || users.length == 0) {
            throw new NotFoundException('users data not found!');
        }
        return users;
    }
}
