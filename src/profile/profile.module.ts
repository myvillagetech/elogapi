import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';
import { UsersModule } from 'src/users/users.module';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { ProfileSchema } from './schemas/profile.schemas';

@Module({
  imports:[MongooseModule.forFeature([{name:MODEL_ENUMS.PROFILES, schema : ProfileSchema}]),UsersModule],
  controllers: [ProfileController],
  providers: [ProfileService],
  exports : [ProfileService]
})
export class ProfileModule {}
