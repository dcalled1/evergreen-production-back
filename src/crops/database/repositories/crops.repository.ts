import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Crop } from 'src/crops/entities/crop.entity';
import { CropDo, CropDocument } from '../schemas/crop.schema';
import { CreateCropDto } from 'src/crops/dto/create-crop.dto';

@Injectable()
export class CropsRepository {
  constructor(@InjectModel(CropDo.name) private model: Model<CropDocument>) {}

  async create(crop: CreateCropDto): Promise<Crop> {
    return await new this.model(crop).save();
  }

  async update(id: string, crop: Crop): Promise<Crop> {
    return await this.model.findByIdAndUpdate(id, crop, { new: true });
  }

  async find(id: string): Promise<Crop> {
    return await this.model.findById(id).populate('plot');
  }

  async findAll(): Promise<Crop[]> {
    return await this.model.find().populate('plot');
  }

  async remove(id: string): Promise<Crop> {
    return await this.model.findByIdAndDelete(id);
  }
}
