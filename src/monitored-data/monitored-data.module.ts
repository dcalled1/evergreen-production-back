import { Module } from '@nestjs/common';
import { MonitoredDataService } from './monitored-data.service';
import { MonitoredDataController } from './monitored-data.controller';
import { MonitoredDataRepository } from './database/repositories/monitored-data.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MonitoredDatumDo,
  MonitoredDatumSchema,
} from './database/schemas/monitored-datum.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MonitoredDatumDo.name, schema: MonitoredDatumSchema },
    ]),
  ],
  controllers: [MonitoredDataController],
  providers: [MonitoredDataService, MonitoredDataRepository],
})
export class MonitoredDataModule {}
