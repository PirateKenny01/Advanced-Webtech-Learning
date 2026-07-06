import { Controller,Get,Query,Param,Post, Body,Put,Delete,HttpCode,HttpStatus } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profiles')
export class ProfilesController 
{
  @Get()
  findAll(
    @Query('location') location: string) 
{
    return [{ location }];
  }

  @Get(':id')
    findOne(
    @Param('id') id: string) 
    {
        return { id };
    }

@Post()
  create(
    @Body() createProfileDto: CreateProfileDto) 
    {
    return{
        name: createProfileDto.name,
        description: createProfileDto.description
    } ;
  }

  @Put(':id')
  Update(
  @Param('id') id :string,
  @Body() updateProfileDto: UpdateProfileDto) 
  {
    return{
        id,
        ...updateProfileDto
    };

  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // Set the HTTP status code to 200 OK ,but for delete operation, 204 No Content is more appropriate
  remove(
    @Param('id') id: string) 
    {
        return;
    }

}
