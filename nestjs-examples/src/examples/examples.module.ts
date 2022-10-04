import { Module } from '@nestjs/common';
import { AxiosController } from './axios/axios.controller';
import { AxiosService } from './axios/axios.service';

@Module({
  providers: [AxiosService],
  controllers: [AxiosController],
})
export class ExamplesModule {}
