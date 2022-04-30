import { Injectable } from '@nestjs/common';
import { MonitoredDataRepository } from './database/repositories/monitored-data.repository';
import { UpdateMonitoredDatumDto } from './dto/update-monitored-datum.dto';
import { MonitoredDatum } from './entities/monitored-datum.entity';

@Injectable()
export class MonitoredDataService {
  constructor(private readonly repository: MonitoredDataRepository) {}

  async create(monitoredDatum: MonitoredDatum) {
    return await this.repository.create(monitoredDatum);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: string) {
    return await this.repository.find(id);
  }

  async update(id: string, updateMonitoredDatumDto: UpdateMonitoredDatumDto) {
    return await this.repository.update(id, updateMonitoredDatumDto);
  }

  async remove(id: string) {
    return await this.repository.remove(id);
  }

  async findByCrop(id: string) {
    return this.repository.filterByCrop(id);
  }
}
