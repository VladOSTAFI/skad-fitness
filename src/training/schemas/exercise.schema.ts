import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Training } from './training.schema';

export type TrainingDocument = HydratedDocument<Exercise>;

@Schema()
export class Exercise {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Training' })
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

export const exerciseSchema = SchemaFactory.createForClass(Exercise);
