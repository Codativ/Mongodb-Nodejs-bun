import mongoose, { Schema, Document } from 'mongoose';

export enum Role {
    ADMIN = 'admin',
    USER = 'user',
}

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    role: Role;
    createdAt?: Date;
    updatedAt?: Date;
}


const UserSchema: Schema<IUser> = new Schema(
    {
        username: {
            type: String,
            required: [true, "Username is required"],
            unique: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            match: [/.+\@.+\..+/, "Please enter a valid email address"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        role: {
            type: String,
            enum: Object.values(Role),
            default: Role.USER,
        },
    },
    { timestamps: true }
);


const User = mongoose.model<IUser>('User', UserSchema);
export default User;
