import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Crop } from 'src/crops/entities/crop.entity';
import { PlotDo } from 'src/plots/database/schemas/plot.schema';
import { Plot } from 'src/plots/entities/plot.entity';

export type CropDocument = CropDo & Document;

@Schema({ collection: 'crops' })
export class CropDo implements Crop {
  @Prop()
  startDate?: Date;

  @Prop()
  estimatedEndDate?: Date;

  @Prop()
  seed?: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: PlotDo.name })
  plot?: Plot;
}

export const CropSchema = SchemaFactory.createForClass(CropDo);
