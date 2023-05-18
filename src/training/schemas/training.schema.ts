import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

export type TrainingDocument = HydratedDocument<Training>;

@Schema()
export class Training {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: Date })
  date: number;

  @Prop({ type: Date, default: Date.now })
  createAt: Date;
}

export const TrainingSchema = SchemaFactory.createForClass(Training);
