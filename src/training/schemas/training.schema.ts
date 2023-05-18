import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
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

@Schema()
export class Exercise{
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Training'})
    training: Training;

    @Prop()
    title: string;

    @Prop()
    reps: number;

    @Prop()
    wight: number;

    @Prop()
    sets: number;

    @Prop()
    comment: string;
}

export const exerciseSchema = SchemaFactory.createForClass(Exercise)