import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MONGO_KEYS } from './config/keys.config';
import { OrganizationsModule } from './organizations/organizations.module';
import { UsersModule } from './users/users.module';



@Module({
  imports: [MongooseModule.forRoot(MONGO_KEYS.url),AuthModule,UsersModule,OrganizationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
