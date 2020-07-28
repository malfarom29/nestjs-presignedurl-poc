import { Attachment } from '../entities/attachment.entity';
import { Injectable } from '@nestjs/common';
import { AttachmentDto } from '../dto/response/attachment.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class AttachmentMapper {
  toDto(attachment: Attachment, url: string): AttachmentDto {
    const payload = {
      ...attachment,
      signedUrl: url,
    };
    return plainToClass(AttachmentDto, payload, {excludeExtraneousValues: true});
  }
}