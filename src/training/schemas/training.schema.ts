import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/user/schemas/user.schema";

export type TrainingDocument = HydratedDocument<Training, Exercise>

@Schema()
export class Training {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;

    @Prop({ type: Date, default: Date.now})
    date: number;

    @Prop({ type: Date })
    createAt: Date
}

export const TrainingSchema = SchemaFactory.createForClass(Training)