import { Body, Controller, Get, Post } from '@nestjs/common';
import { AttachmentsService } from './services/attachments.service';
import { AttachmentDto } from './dto/response/attachment.dto';

@Controller('attachments')
export class AttachmentsController {
  constructor(private readonly attachmentsService: AttachmentsService) {}

  @Post()
  createAttachment(@Body('type') type: string): Promise<{ url: string }> {
    return this.attachmentsService.createAttachment(type);
  }

  @Get()
  getAttachments(): Promise<AttachmentDto[]> {
    return this.attachmentsService.getAttachments();
  }
}
