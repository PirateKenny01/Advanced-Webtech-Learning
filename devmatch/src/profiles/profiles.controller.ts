import { Controller,Get,Query,Param,Post, Body,Put,Delete,HttpCode,HttpStatus,HttpException, NotFoundException,ParseUUIDPipe,ValidationPipe } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileService } from './profiles.service';
import type {UUID} from 'crypto';

@Controller('profiles')
export class ProfilesController 
{

   constructor(private profileService: ProfileService) {}

  // GET /users/search?name=substring
  @Get('search')
  searchByFullName(@Query('name') name: string) 
  {
    if (!name) return [];
    return this.profileService.searchByFullName(name);
  }
// create a new user
@Post()
  create( @Body() createProfileDto: CreateProfileDto) 
    {
    return this.profileService.create(createProfileDto);
    }
  
// GET /users/:username
  @Get(':username')
  findByUsername(@Param('username') username: string) 
  {
    return this.profileService.findByUsername(username);
  }

  // DELETE /users/:username
  @Delete(':username')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeByUsername(@Param('username') username: string)
 {
    return this.profileService.removeByUsername(username);
  }

}
