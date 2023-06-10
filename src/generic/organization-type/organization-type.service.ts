import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { OrganizationTypeDto } from './dto/organization-type.dto';
import { OrganizationTypeDocument } from './schemas/organization-type.schema';

@Injectable()
export class OrganizationTypeService {
    @InjectModel(MODEL_ENUMS.ORGANIZATION_TYPES) private organizationTypeModel: Model<OrganizationTypeDocument>
    constructor(){}

    async createOrganizationType( organizationTypeDto : OrganizationTypeDto) : Promise <OrganizationTypeDocument>{
        const newOrganizationType = await new this.organizationTypeModel(organizationTypeDto);

        return newOrganizationType.save();
    }

    async getOrganizationTypeById(id: string): Promise<OrganizationTypeDocument> {
        const existingOrganizationType = await this.organizationTypeModel.findById(id);
        if (!existingOrganizationType) {
            throw new NotFoundException(`organization type with ${id} is not found`)
        }
        return existingOrganizationType;
    }

    async getAllOrganizationsTypes(): Promise<OrganizationTypeDocument[]> {
        const organizationTypes : any = await this.organizationTypeModel.find().lean();
        if (!organizationTypes || organizationTypes.length == 0) {
            throw new NotFoundException('organization data not found!');
        }
        return organizationTypes;
    }

    async updateOrganizationType(id: string, organizationTypeDto : OrganizationTypeDto): Promise<OrganizationTypeDocument> {
        const existingOrganizationType = await this.organizationTypeModel.findByIdAndUpdate(
            id,
            organizationTypeDto,
            { new: true },
        );
        if (!existingOrganizationType) {
            throw new NotFoundException(`user #${id} not found`);
        }
        return existingOrganizationType;
    }

    async deleteOrganizationType(id: string): Promise<OrganizationTypeDocument> {
        const deletedOrganization = await this.organizationTypeModel.findByIdAndDelete(id);
        if (!deletedOrganization) {
            throw new NotFoundException(`user #${id} not found`);
        }
        return deletedOrganization;
    }

}
