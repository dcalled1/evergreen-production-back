import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Plot } from 'src/plots/entities/plot.entity';
import { PlotDo, PlotDocument } from '../schemas/plot.schema';

@Injectable()
export class PlotsRepository {
  constructor(@InjectModel(PlotDo.name) private model: Model<PlotDocument>) {}

  async create(plot: Plot): Promise<Plot> {
    return await new this.model(plot).save();
  }

  async update(id: string, plot: Plot): Promise<Plot> {
    return await this.model.findByIdAndUpdate(id, plot, { new: true });
  }

  async find(id: string): Promise<Plot> {
    return await this.model.findById(id);
  }

  async findAll(): Promise<Plot[]> {
    return await this.model.find();
  }

  async remove(id: string): Promise<Plot> {
    return await this.model.findByIdAndDelete(id);
  }
}
