import type { UserRepository } from "../ports/userRepository.js";
import type { RegisterDTO } from "../dtos/Register.dto.js"
import { User } from "../../domain/entities/user.js";


export class RegisterUser {
    constructor(private deps: { userRepo: UserRepository }) { }

    async execute(dto: RegisterDTO) {
        const existing = await this.deps.userRepo.findByEmail(dto.email); 
        if (existing) {
            throw new Error("Email already exists");
        }

        const user = new User({
            id: "",
            firstname: dto.firstname,
            lastname: dto.lastname,
            email: dto.email,
            passwordHash: dto.passwordHash, 
            profilePicture: dto.profilePicture ?? "",
        });

        const created = await this.deps.userRepo.create(user);

        return {
            id: created.id,
            email: created.email,
            firstname: created.firstname,
            lastname: created.lastname,
            profilePicture: created.profilePicture,
        };
    }
}