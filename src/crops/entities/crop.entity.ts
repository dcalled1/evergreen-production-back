import { Plot } from 'src/plots/entities/plot.entity';

export interface Crop {
  startDate?: Date;
  estimatedEndDate?: Date;
  seed?: string;
  plot?: Plot;
}
