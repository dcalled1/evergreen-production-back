import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateCropDto } from './create-crop.dto';

export class UpdateCropDto extends PartialType(
  OmitType(CreateCropDto, ['startDate', 'seed', 'plot'] as const),
) {}
