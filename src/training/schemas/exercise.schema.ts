import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Training } from "./training.schema";

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