import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TStage } from "./config/configurations.interface";
import configurations from "./config/configurations";

const TAG = 'MAIN';

async function bootstrap(env: TStage) {
  // config
  const config = configurations(env);
  // init app
  const app = await NestFactory.create(AppModule);
  // port
  const port = config?.apps?.main?.port || 3000;
  await app.listen(port);

  console.log(TAG, 'start', port);
}
bootstrap(process.argv[2] as TStage);
