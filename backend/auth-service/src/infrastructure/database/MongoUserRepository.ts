import type { UserRepository } from "../../application/ports/userRepository.js";
import { User } from "../../domain/entities/user.js"

import { UserModel } from "./model/UserModel.js"

export class MongoUserRepository implements UserRepository {
    async findByEmail(email: string): Promise<User | null> {
        const doc = await UserModel.findOne({ email }).lean();
        if (!doc) return null


        return new User({
            id: String(doc._id),
            email: doc.email,
            passwordHash: doc.password,
            firstname: doc.firstname,
            lastname: doc.lastname,
            profilePicture: doc.profilePicture,
        });
    }

    async create(user: User): Promise<any | null> {
        const created = await UserModel.create({
            email: user.email,
            password: user.passwordHash,
            firstname: user.firstname,
            lastname: user.lastname,
            profilePicture: user.profilePicture,
        });

        if (!created) {
            return null
        }

        return new User({
            id: String(created._id),
            email: created.email,
            passwordHash: created.password,
            firstname: created.firstname,
            lastname: created.lastname,
            profilePicture: created.profilePicture ?? (created as any).profileImage,
        });
    }
}