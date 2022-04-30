import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { CropDo } from 'src/crops/database/schemas/crop.schema';
import { Crop } from 'src/crops/entities/crop.entity';
import { CropEvent } from 'src/monitored-data/entities/crop-event.entity';
import { MonitoredDatum } from 'src/monitored-data/entities/monitored-datum.entity';

export type MonitoredDatumDocument = MonitoredDatumDo & Document;

@Schema({ collection: 'monitored_data' })
export class MonitoredDatumDo implements MonitoredDatum {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: CropDo.name })
  crop?: Crop;

  @Prop()
  event?: CropEvent;

  @Prop({ default: Date.now })
  date?: Date;

  @Prop({ type: mongoose.Schema.Types.Mixed })
  info?: any;
}

export const MonitoredDatumSchema =
  SchemaFactory.createForClass(MonitoredDatumDo);
