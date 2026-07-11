"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
let ProfilesService = class ProfilesService {
    profiles = [
        {
            id: (0, crypto_1.randomUUID)(),
            name: 'John Doe',
            description: 'Software Engineer'
        },
        {
            id: (0, crypto_1.randomUUID)(),
            name: 'Jane Smith',
            description: 'Product Manager'
        },
        {
            id: (0, crypto_1.randomUUID)(),
            name: 'Alice Johnson',
            description: 'UX Designer'
        },
    ];
    findAll() {
        return this.profiles;
    }
    findOne(id) {
        return this.profiles.find(profile => profile.id === id);
    }
    create(createProfileDto) {
        const createdProfile = {
            id: (0, crypto_1.randomUUID)(),
            ...createProfileDto
        };
        this.profiles.push(createdProfile);
        return createdProfile;
    }
    update(id, updateProfileDto) {
        const profileIndex = this.profiles.findIndex((existingProfile) => existingProfile.id === id);
        if (profileIndex === -1) {
            return {};
        }
        this.profiles[profileIndex] = {
            ...this.profiles[profileIndex],
            ...updateProfileDto
        };
        return this.profiles[profileIndex];
    }
    remove(id) {
        const profileIndex = this.profiles.findIndex((existingProfile) => existingProfile.id === id);
        if (profileIndex !== -1) {
            this.profiles.splice(profileIndex, 1);
        }
    }
};
exports.ProfilesService = ProfilesService;
exports.ProfilesService = ProfilesService = __decorate([
    (0, common_1.Injectable)()
], ProfilesService);
//# sourceMappingURL=profiles.service.js.map