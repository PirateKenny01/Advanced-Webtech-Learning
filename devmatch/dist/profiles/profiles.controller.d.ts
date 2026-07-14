import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileService } from './profiles.service';
export declare class ProfilesController {
    private profileService;
    constructor(profileService: ProfileService);
    searchByFullName(name: string): Promise<import("./profiles.entity").ProfileEntity[]> | never[];
    create(createProfileDto: CreateProfileDto): Promise<import("./profiles.entity").ProfileEntity>;
    findByUsername(username: string): Promise<import("./profiles.entity").ProfileEntity>;
    removeByUsername(username: string): Promise<void>;
}
