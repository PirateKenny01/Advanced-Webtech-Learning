import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import type { CreateProfileDto } from './dto/create-profile.dto';
import type { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService 
{

    private profiles = [
    { 
        id: randomUUID(),
        name: 'John Doe',
        description: 'Software Engineer'

    },
    {
        id: randomUUID(),
        name: 'Jane Smith',
        description: 'Product Manager'
    },
    {
        id: randomUUID(),
        name: 'Alice Johnson',
        description: 'UX Designer'

    },
    
 ];

findAll() 
  {
    return this.profiles;
  }

findOne(id: string)
  {

    const matchingProfile = this.profiles.find(profile => profile.id === id);

    if (!matchingProfile) 
    {
      throw new Error(`Profile with ID ${id} not found`);
    }
    return matchingProfile;
  }

create(createProfileDto: CreateProfileDto)
    {
        const createdProfile = {
            id: randomUUID(),
            ...createProfileDto
        };

       this.profiles.push(createdProfile); 
       return createdProfile;
    }

update(id: string, updateProfileDto:UpdateProfileDto)
    {
        const matchingProfile = this.profiles.find(
            (existingProfile) => existingProfile.id === id
        );

       if (!matchingProfile)
       {
        throw new NotFoundException(`Profile with ID ${id} not found`);
       }

       
       matchingProfile.name = updateProfileDto.name;
       matchingProfile.description = updateProfileDto.description;

       return matchingProfile;

    }

//    update(id: string, updateProfileDto: UpdateProfileDto) 
//    {
//     // 1. Find the index of the profile in the array
//     const profileIndex = this.profiles.findIndex(
//         (existingProfile) => existingProfile.id === id
//     );

//     // 2. If it doesn't exist, return an empty object (or throw an error)
//     if (profileIndex === -1) {
//         return {};
//     }

//     // 3. Merge the existing profile data with the updated incoming data
//     this.profiles[profileIndex] = {
//         ...this.profiles[profileIndex],  // Keep the original fields (like id)
//         ...updateProfileDto              // Overwrite name and description
//     };

//     // 4. Return the newly updated profile from the array
//     return this.profiles[profileIndex];
//   }

  remove(id: string) : void 
  {
    const profileIndex = this.profiles.findIndex(
        (existingProfile) => existingProfile.id === id
    );
    if (profileIndex === -1) {
        throw new NotFoundException(`Profile with ID ${id} not found`);
    }

     this.profiles.splice(profileIndex, 1);
  }

}