import mongoose, { Model, Schema } from "mongoose";

export interface IUserDocument {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    profilePicture: string,

    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<IUserDocument>({
    firstname: { type: String, required: true, },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    profilePicture: { type: String, required: true },
}, {
    timestamps: true
})

export const UserModel: Model<IUserDocument> = (mongoose.models.User as Model<IUserDocument>) || mongoose.model<IUserDocument>("User", userSchema);