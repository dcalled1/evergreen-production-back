import { PlotStatus } from './status.entity';

export interface Plot {
  area?: number;
  longitude?: number;
  latitude?: number;
  status?: PlotStatus;
}
