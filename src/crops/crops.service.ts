import { Injectable } from '@nestjs/common';
import { CropsRepository } from './database/repositories/crops.repository';
import { CreateCropDto } from './dto/create-crop.dto';
import { UpdateCropDto } from './dto/update-crop.dto';

@Injectable()
export class CropsService {
  constructor(private readonly repository: CropsRepository) {}

  async create(createCropDto: CreateCropDto) {
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
