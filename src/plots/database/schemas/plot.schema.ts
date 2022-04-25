import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Plot } from 'src/plots/entities/plot.entity';
import { PlotStatus } from 'src/plots/entities/status.entity';

export type PlotDocument = PlotDo & Document;

@Schema({ collection: 'plots' })
export class PlotDo implements Plot {
  @Prop()
  area: number;

  @Prop()
  longitude: number;

  @Prop()
  latitude: number;

  @Prop()
  status: PlotStatus;
}

export const PlotSchema = SchemaFactory.createForClass(PlotDo);
