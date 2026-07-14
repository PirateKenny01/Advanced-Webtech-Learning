import { Module } from '@nestjs/common';
import { ProfilesController } from './profiles.controller';
import { ProfileService } from './profiles.service';
import {ProfileEntity} from './profiles.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([ProfileEntity])],
  controllers: [ProfilesController],
  providers: [ProfileService]
})
export class ProfilesModule {}
