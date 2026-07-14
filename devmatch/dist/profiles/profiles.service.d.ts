import type { CreateProfileDto } from './dto/create-profile.dto';
import { Repository } from 'typeorm';
import { ProfileEntity } from './profiles.entity';
export declare class ProfileService {
    private profileRepository;
    constructor(profileRepository: Repository<ProfileEntity>);
    create(createProfileDto: CreateProfileDto): Promise<ProfileEntity>;
    searchByFullName(substring: string): Promise<ProfileEntity[]>;
    findByUsername(username: string): Promise<ProfileEntity>;
    removeByUsername(username: string): Promise<void>;
}
