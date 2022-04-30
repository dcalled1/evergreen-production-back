import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { MonitoredDataService } from './monitored-data.service';
import { CreateMonitoredDatumDto } from './dto/create-monitored-datum.dto';
import { UpdateMonitoredDatumDto } from './dto/update-monitored-datum.dto';
import { CropEvent } from './entities/crop-event.entity';

@Controller('monitored-data')
export class MonitoredDataController {
  constructor(private readonly monitoredDataService: MonitoredDataService) {}

  @Post('start')
  async registryStart(
    @Body() createMonitoredDatumDto: CreateMonitoredDatumDto,
  ) {
    return await this.monitoredDataService.create({
      ...createMonitoredDatumDto,
      event: CropEvent.Start,
    });
  }

  @Post('end')
  async registryEnd(@Body() createMonitoredDatumDto: CreateMonitoredDatumDto) {
    return await this.monitoredDataService.create({
      ...createMonitoredDatumDto,
      event: CropEvent.End,
    });
  }

  @Post('irrigation')
  async registryIrrigation(
    @Body() createMonitoredDatumDto: CreateMonitoredDatumDto,
  ) {
    return await this.monitoredDataService.create({
      ...createMonitoredDatumDto,
      event: CropEvent.Irrigation,
    });
  }

  @Post('fertilization')
  async registryFertilization(
    @Body() createMonitoredDatumDto: CreateMonitoredDatumDto,
  ) {
    return await this.monitoredDataService.create({
      ...createMonitoredDatumDto,
      event: CropEvent.Fertilization,
    });
  }

  @Post('maintenance')
  async registryMaintenance(
    @Body() createMonitoredDatumDto: CreateMonitoredDatumDto,
  ) {
    return await this.monitoredDataService.create({
      ...createMonitoredDatumDto,
      event: CropEvent.Maintenance,
    });
  }

  @Get()
  async findAll() {
    return await this.monitoredDataService.findAll();
  }

  @Get('crop')
  async findByCrop(@Query('id') id: string) {
    return await this.monitoredDataService.findByCrop(id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.monitoredDataService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMonitoredDatumDto: UpdateMonitoredDatumDto,
  ) {
    return await this.monitoredDataService.update(id, updateMonitoredDatumDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.monitoredDataService.remove(id);
  }
}
