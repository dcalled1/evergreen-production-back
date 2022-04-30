import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  MonitoredDatumDo,
  MonitoredDatumDocument,
} from '../schemas/monitored-datum.schema';
import { MonitoredDatum } from 'src/monitored-data/entities/monitored-datum.entity';

@Injectable()
export class MonitoredDataRepository {
  constructor(
    @InjectModel(MonitoredDatumDo.name)
    private model: Model<MonitoredDatumDocument>,
  ) {}

  async create(monitoredDatum: MonitoredDatum): Promise<MonitoredDatum> {
    return await new this.model(monitoredDatum).save();
  }

  async update(
    id: string,
    monitoredDatum: MonitoredDatum,
  ): Promise<MonitoredDatum> {
    return await this.model.findByIdAndUpdate(id, monitoredDatum, {
      new: true,
    });
  }

  async find(id: string): Promise<MonitoredDatum> {
    return await this.model.findById(id).populate('crop');
  }

  async findAll(): Promise<MonitoredDatum[]> {
    return await this.model.find();
  }

  async remove(id: string): Promise<MonitoredDatum> {
    return await this.model.findByIdAndDelete(id);
  }

  async filterByCrop(id: string) {
    return await this.model.find({ crop: id });
  }
}
