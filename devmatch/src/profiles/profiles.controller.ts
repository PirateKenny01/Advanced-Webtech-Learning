import { Controller,Get,Query,Param,Post, Body,Put,Delete,HttpCode,HttpStatus,HttpException, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController 
{

   constructor(private profileService: ProfilesService) {}


   @Get()
   findAll(){
    return this.profileService.findAll();
   }
 
  

  @Get(':id')
    findOne(
    @Param('id') id: string) 
    {
      try {
        return this.profileService.findOne(id);
      } catch (error) {
        throw new NotFoundException(error.message);
      }

    }

@Post()
  create( @Body() createProfileDto: CreateProfileDto) 
    {
    return this.profileService.create(createProfileDto);
    }
  

  @Put(':id')
  Update(
  @Param('id') id :string,
  @Body() updateProfileDto: UpdateProfileDto) 
  {
    return this.profileService.update(id, updateProfileDto);

  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // Set the HTTP status code to 200 OK ,but for delete operation, 204 No Content is more appropriate
  remove(
    @Param('id') id: string) 
    {
       this.profileService.remove(id);
    }

}
