import { Module } from '@nestjs/common';
import { AttachmentsModule } from './attachments/attachments.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), ConfigModule.forRoot(), AttachmentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
