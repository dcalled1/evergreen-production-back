import { Injectable } from '@nestjs/common';
import { PlotsRepository } from './database/repositories/plots.repository';
import { CreatePlotDto } from './dto/create-plot.dto';
import { UpdatePlotDto } from './dto/update-plot.dto';
import { PlotStatus } from './entities/status.entity';

@Injectable()
export class PlotsService {
  constructor(private readonly repository: PlotsRepository) {}

  async create(createPlotDto: CreatePlotDto) {
    return await this.repository.create({
      ...createPlotDto,
      status: PlotStatus.Free,
    });
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: string) {
    return await this.repository.find(id);
  }

  async update(id: string, updatePlotDto: UpdatePlotDto) {
    return this.repository.update(id, updatePlotDto);
  }

  async remove(id: string) {
    return this.repository.remove(id);
  }

  async setBusy(id: string) {
    return await this.repository.update(id, { status: PlotStatus.Busy });
  }

  async setFree(id: string) {
    return await this.repository.update(id, { status: PlotStatus.Free });
  }

  async isFree(id: string): Promise<boolean> {
    return (await this.repository.find(id)).status == PlotStatus.Free;
  }
}
