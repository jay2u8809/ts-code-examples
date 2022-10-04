import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestingModule } from './testing/testing.module';
import { ExamplesModule } from './examples/examples.module';

@Module({
  imports: [TestingModule, ExamplesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
