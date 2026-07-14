import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import type { CreateProfileDto } from './dto/create-profile.dto';
import type { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {ILike, Repository} from 'typeorm';
import {ProfileEntity} from './profiles.entity';

@Injectable()
export class ProfileService {
  constructor(@InjectRepository(ProfileEntity) private  profileRepository: Repository<ProfileEntity>) {}

  // Create a user
  async create(createProfileDto: CreateProfileDto): Promise<ProfileEntity> 
  {
    const profile = this.profileRepository.create(createProfileDto);
    return this.profileRepository.save(profile);
  }

  // Retrieve users whose full name contains a specific substring
  async searchByFullName(substring: string): Promise<ProfileEntity[]> 
  {
    return this.profileRepository.find({
      where: {
        // ILike performs a case-insensitive search in PostgreSQL
        fullName: ILike(`%${substring}%`), 
      },
    });
  }

  // Retrieve a user based on their unique username
  async findByUsername(username: string): Promise<ProfileEntity> 
  {
    const user = await this.profileRepository.findOne({ where: { username } });
    if (!user) 
    {
      throw new NotFoundException(`User with username '${username}' not found`);
    }
    return user;
  }

  // Remove a user based on their unique username
  async removeByUsername(username: string): Promise<void> 
  {
    const result = await this.profileRepository.delete({ username });
    if (result.affected === 0) 
    {
      throw new NotFoundException(`User with username '${username}' not found`);
    }
}
}


// @Injectable()
// export class ProfilesService 
// {

//     private profiles = [
//     { 
//         id: randomUUID(),
//         name: 'John Doe',
//         description: 'Software Engineer'

//     },
//     {
//         id: randomUUID(),
//         name: 'Jane Smith',
//         description: 'Product Manager'
//     },
//     {
//         id: randomUUID(),
//         name: 'Alice Johnson',
//         description: 'UX Designer'

//     },
    
//  ];

// findAll() 
//   {
//     return this.profiles;
//   }

// findOne(id: string)
//   {

//     const matchingProfile = this.profiles.find(profile => profile.id === id);

//     if (!matchingProfile) 
//     {
//       throw new Error(`Profile with ID ${id} not found`);
//     }
//     return matchingProfile;
//   }

// create(createProfileDto: CreateProfileDto)
//     {
//         const createdProfile = {
//             id: randomUUID(),
//             ...createProfileDto
//         };

//        this.profiles.push(createdProfile); 
//        return createdProfile;
//     }

// update(id: string, updateProfileDto:UpdateProfileDto)
//     {
//         const matchingProfile = this.profiles.find(
//             (existingProfile) => existingProfile.id === id
//         );

//        if (!matchingProfile)
//        {
//         throw new NotFoundException(`Profile with ID ${id} not found`);
//        }

       
//        matchingProfile.name = updateProfileDto.name;
//        matchingProfile.description = updateProfileDto.description;

//        return matchingProfile;

//     }

// //    update(id: string, updateProfileDto: UpdateProfileDto) 
// //    {
// //     // 1. Find the index of the profile in the array
// //     const profileIndex = this.profiles.findIndex(
// //         (existingProfile) => existingProfile.id === id
// //     );

// //     // 2. If it doesn't exist, return an empty object (or throw an error)
// //     if (profileIndex === -1) {
// //         return {};
// //     }

// //     // 3. Merge the existing profile data with the updated incoming data
// //     this.profiles[profileIndex] = {
// //         ...this.profiles[profileIndex],  // Keep the original fields (like id)
// //         ...updateProfileDto              // Overwrite name and description
// //     };

// //     // 4. Return the newly updated profile from the array
// //     return this.profiles[profileIndex];
// //   }

//   remove(id: string) : void 
//   {
//     const profileIndex = this.profiles.findIndex(
//         (existingProfile) => existingProfile.id === id
//     );
//     if (profileIndex === -1) {
//         throw new NotFoundException(`Profile with ID ${id} not found`);
//     }

//      this.profiles.splice(profileIndex, 1);
//   }

// }