import { Crop } from 'src/crops/entities/crop.entity';
import { CropEvent } from './crop-event.entity';

export interface MonitoredDatum {
  crop?: Crop | string;
  event?: CropEvent;
  date?: Date;
  info?: any;
}
