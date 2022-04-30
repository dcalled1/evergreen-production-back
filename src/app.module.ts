import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PlotsModule } from './plots/plots.module';
import { CropsModule } from './crops/crops.module';
import { MonitoredDataModule } from './monitored-data/monitored-data.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    DatabaseModule,
    PlotsModule,
    CropsModule,
    MonitoredDataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
