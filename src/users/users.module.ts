import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schemas';
import { MODEL_ENUMS } from 'src/shared/enums/model.enums';

@Module({
  imports:[MongooseModule.forFeature([{name:MODEL_ENUMS.USERS, schema : UserSchema}])],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
