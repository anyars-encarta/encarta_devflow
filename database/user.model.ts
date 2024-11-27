import { model, models, Schema } from "mongoose";
import { string } from "zod";

export interface IUser {
    name: string;
    username: string;
    email: string;
    bio?: string;
    image: string;
    location?: string;
    portfolio?: string;
    reputation?: number;
};

const UserSchema = new Schema(
  {
    name: { type: string, required: true },
    username: { type: string, required: true, unique: true },
    email: { type: string, required: true, unique: true },
    bio: { type: string },
    image: { type: string, required: true },
    location: { type: string },
    portfolio: { type: string },
    reputation: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const User = models?.user || model<IUser>("User", UserSchema);

export default User;