import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "@nestjs/config";
import configurations from "./config/configurations";
import { TestingModule } from './testing/testing.module';
import { ExamplesModule } from './examples/examples.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configurations]
  }), TestingModule, ExamplesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
