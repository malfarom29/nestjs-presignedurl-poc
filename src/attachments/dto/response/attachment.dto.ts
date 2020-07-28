import { Expose } from 'class-transformer';

export class AttachmentDto {
  @Expose() id: number;
  @Expose() signedUrl: string;
}