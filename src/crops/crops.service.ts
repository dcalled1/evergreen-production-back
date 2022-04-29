import { Injectable } from '@nestjs/common';
import { PlotsService } from 'src/plots/plots.service';
import { CropsRepository } from './database/repositories/crops.repository';
import { CreateCropDto } from './dto/create-crop.dto';
import { UpdateCropDto } from './dto/update-crop.dto';

@Injectable()
export class CropsService {
  constructor(
    private readonly repository: CropsRepository,
    private readonly plotsService: PlotsService,
  ) {}

  async create(createCropDto: CreateCropDto) {
    if (await this.plotsService.isFree(createCropDto.plot))
      throw new Error('Plot busy');
    await this.plotsService.setBusy(createCropDto.plot);
    return await this.repository.create(createCropDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: string) {
    return await this.repository.find(id);
  }

  async update(id: string, updateCropDto: UpdateCropDto) {
    return await this.repository.update(id, updateCropDto);
  }

  async remove(id: string) {
    return await this.repository.remove(id);
  }
}
