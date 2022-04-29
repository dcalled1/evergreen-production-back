import { Module } from '@nestjs/common';
import { CropsService } from './crops.service';
import { CropsController } from './crops.controller';
import { CropsRepository } from './database/repositories/crops.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { CropDo, CropSchema } from './database/schemas/crop.schema';
import { PlotsModule } from 'src/plots/plots.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CropDo.name, schema: CropSchema }]),
    PlotsModule,
  ],
  controllers: [CropsController],
  providers: [CropsService, CropsRepository],
})
export class CropsModule {}
