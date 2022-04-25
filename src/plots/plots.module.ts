import { Module } from '@nestjs/common';
import { PlotsService } from './plots.service';
import { PlotsController } from './plots.controller';
import { PlotsRepository } from './database/repositories/plots.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { PlotDo, PlotSchema } from './database/schemas/plot.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PlotDo.name, schema: PlotSchema }]),
  ],
  controllers: [PlotsController],
  providers: [PlotsService, PlotsRepository],
})
export class PlotsModule {}
