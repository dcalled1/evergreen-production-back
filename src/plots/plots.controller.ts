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
import { PlotsService } from './plots.service';
import { CreatePlotDto } from './dto/create-plot.dto';
import { UpdatePlotDto } from './dto/update-plot.dto';

@Controller('plots')
export class PlotsController {
  constructor(private readonly plotsService: PlotsService) {}

  @Get('setFree')
  async setFree(@Query('id') id: string) {
    return await this.plotsService.setFree(id);
  }

  @Get('setBusy')
  async setBusy(@Query('id') id: string) {
    return await this.plotsService.setBusy(id);
  }

  @Post()
  async create(@Body() createPlotDto: CreatePlotDto) {
    return await this.plotsService.create(createPlotDto);
  }

  @Get()
  async findAll() {
    return await this.plotsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.plotsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePlotDto: UpdatePlotDto) {
    return await this.plotsService.update(id, updatePlotDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.plotsService.remove(id);
  }
}
