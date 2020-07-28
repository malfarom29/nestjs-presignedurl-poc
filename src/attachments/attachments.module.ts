import { Module } from '@nestjs/common';
import { AttachmentsService } from './services/attachments.service';
import { AttachmentsController } from './attachments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttachmentRepository } from './respositories/attachment.repository';
import { AttachmentMapper } from './mappers/attachment.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([AttachmentRepository])],
  providers: [AttachmentsService, AttachmentMapper],
  controllers: [AttachmentsController],
})
export class AttachmentsModule {}
