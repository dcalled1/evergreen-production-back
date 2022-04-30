import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateMonitoredDatumDto } from './create-monitored-datum.dto';

export class UpdateMonitoredDatumDto extends PartialType(
  OmitType(CreateMonitoredDatumDto, ['crop'] as const),
) {}
