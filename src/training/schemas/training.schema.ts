import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/user/schemas/user.schema";

@Schema()
export class Training {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;

    @Prop({ type: Date, startAt: '2023-06-02'})
    date: number;

    @Prop({ type: Date })
    createAt: Date
}

export const TrainingSchema = SchemaFactory.createForClass(Training)