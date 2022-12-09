import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { UserDocument } from 'src/users/schemas/user.schemas';
import { UsersService } from 'src/users/users.service';
import { OrganizationDto } from './dto/organizations.dto';
import { OrganizationDocument } from './schemas/organizations.schema';

@Injectable()
export class OrganizationsService {
    @InjectModel(MODEL_ENUMS.ORGANIZATIONS) private organizationsModel : Model<OrganizationDocument>
    constructor(
        private userService : UsersService
    ){

    }

    async createOrganization(createOrganizationDto : OrganizationDto) : Promise <OrganizationDocument>{
        const newOrganization = await new this.organizationsModel(createOrganizationDto);
        return newOrganization.save();
    }

    async getOrganizationById(id: string): Promise<OrganizationDocument> {
        const existingUser = await this.organizationsModel.findById(id);
        if (!existingUser) {
            throw new NotFoundException(`organization with ${id} is not found`)
        }
        return existingUser;
    }

    async getAllOrganizations(): Promise<OrganizationDocument[]> {
        const organizations = await this.organizationsModel.find();
        debugger;
        if (!organizations || organizations.length == 0) {
            throw new NotFoundException('organization data not found!');
        }
        return organizations;
    }

    async getAllOrganizationsbyUserId(userId:string): Promise<OrganizationDocument[]>{
        const user : UserDocument = await this.userService.getUserById(userId);

        const organizations = this.organizationsModel.find({_id : {$in :user.organization}})

        if(organizations){
            return organizations;
        }else{
            throw new NotFoundException('organizations data not found!');
        }
        
    }

    async organizationTextSerach(searchString: string): Promise<OrganizationDocument[]> {
        console.log(searchString);
        const search = searchString ? {
            $or: [
                { organization: new RegExp(searchString.toString(), 'i') },
                { shortName: new RegExp(searchString.toString(), 'i') }
            ]
        } : {};

        const results = await this.organizationsModel.find(search);
        return results;
    }




}
