import { Injectable } from '@nestjs/common';
import * as s3 from '../../utils/aws/s3';
import { AttachmentRepository } from '../respositories/attachment.repository';
import { AttachmentMapper } from '../mappers/attachment.mapper';
import { AttachmentDto } from '../dto/response/attachment.dto';

@Injectable()
export class AttachmentsService {
  constructor(
    private readonly attachmentRepository: AttachmentRepository,
    private readonly attachmentMapper: AttachmentMapper,
  ) {}

  async createAttachment(type: string): Promise<{ url: string }> {
    const { key, url } = s3.preSignedPutURL();
    await this.attachmentRepository.save({ key, type });
    return { url };
  }

  async getAttachments(): Promise<AttachmentDto[]> {
    const attachments = await this.attachmentRepository.find();
    return attachments.map(attachment => {
      return this.attachmentMapper.toDto(attachment, s3.preSignedGetURL(attachment.key))
    })
  }
}
