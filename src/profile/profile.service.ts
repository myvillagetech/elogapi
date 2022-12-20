import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { UsersService } from 'src/users/users.service';
import { ProfileEmailReportsDto } from './dto/emailReports.dto';
import { ProfileNotificationDto } from './dto/notifications.dto';
import { ProfileDto } from './dto/profile.dto';
import { ProfileDocument } from './schemas/profile.schemas';

@Injectable()
export class ProfileService {

    @InjectModel(MODEL_ENUMS.PROFILES) private ProfileModel : Model<ProfileDocument>
    constructor(private userService : UsersService){
    }


    async createProfile(createProfileDto : ProfileDto) : Promise<ProfileDocument>{
        const newProfile = await new this.ProfileModel(createProfileDto);
        return newProfile.save();
    }

    async updateProfile(profileId : string, updateProfileDetails : ProfileDto) : Promise<ProfileDocument>{
        const profile = await this.ProfileModel.findByIdAndUpdate(
            profileId,
            updateProfileDetails,
            { new: true},
        );

        this.userService.updateUser(updateProfileDetails.userId,{
            Name: updateProfileDetails.Name,
        })

        if(!profile) {
            throw new NotFoundException(`Profile with #${profileId} not Found`);
        }
        return profile;
    }

    async getProfileByProfileId(ProfileId: string): Promise<ProfileDocument> {
        const profile = await this.ProfileModel.findById(ProfileId);
        if (!profile) {
            throw new NotFoundException(`Profile with ${ProfileId} is not found`)
        }
        return profile;
    }

    async getAllProfile() : Promise<ProfileDocument[]> {
        const profiles = await this.ProfileModel.find();
        if(!profiles || profiles.length == 0) {
            throw new NotFoundException('Profile not found!');
        }
        return profiles
    }

    async getProfileByUserID(userId : string) : Promise<ProfileDocument>{
        const profile = await this.ProfileModel.findById({userId : userId});
        if (!profile) {
            throw new NotFoundException(`Profile with ${userId} is not found`)
        }
        return profile;
    }

    async updateEmailReports(emailReport: ProfileEmailReportsDto, userId: string):
        Promise<any> {

        const emailReportId = emailReport._id;
        const profile = await this.ProfileModel.findOne({ userId: userId });

        const emailReports = profile.emailReports;

        if (!emailReports) {
            profile.emailReports = emailReport
            return await this.ProfileModel.findByIdAndUpdate(profile._id, { 'emailReports': profile.emailReports });
        } else {
            if (emailReportId) {
                return await this.ProfileModel.updateOne(
                    { userId: userId },
                    { $set: { "emailReports": { ...emailReport, _id: emailReportId } } },
                )
            } else {
                return await this.ProfileModel.updateOne(
                    { userId: userId },
                    { $push: { emailReports: emailReport } }
                )
            }
        }
    }

    async updateNotifications(notifications: ProfileNotificationDto, userId: string):
        Promise<any> {

        const notificationId = notifications._id;
        const profile = await this.ProfileModel.findOne({ userId: userId });

        const notificationsData = profile.notifications;

        if (!notificationsData) {
            profile.notifications = notifications
            return await this.ProfileModel.findByIdAndUpdate(profile._id, { 'notifications': profile.notifications });
        } else {
            if (notificationId) {
                return await this.ProfileModel.updateOne(
                    { userId: userId },
                    { $set: { "notifications": { ...notifications, _id: notificationId } } },
                )
            } else {
                return await this.ProfileModel.updateOne(
                    { userId: userId },
                    { $push: { notifications: notifications } }
                )
            }
        }
    }

}
