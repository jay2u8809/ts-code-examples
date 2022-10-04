import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AxiosController } from './axios.controller';
import { ExamplesModule } from '../examples.module';
import { AxiosService } from './axios.service';
import * as request from 'supertest';

const baseUrl = 'axios';

describe('AxiosControllerE2eSpec', () => {
  let app: INestApplication;
  let controller: AxiosController;
  let service: AxiosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ExamplesModule],
    })
      .overrideProvider(AxiosService)
      .useClass(AxiosService)
      .compile();

    app = module.createNestApplication();
    await app.init();

    service = module.get<AxiosService>(AxiosService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('/GET OK get post by id', async () => {
    const postId = 1;
    const url = `/${baseUrl}/post/${postId}`;
    // console.debug('debug-get-post-url', url);
    return request(app.getHttpServer())
      .get(url)
      .expect(200)
      .expect(async (res) => {
        expect(res.body).toEqual(await service.getPost(postId));
        // expect(res.body.id).toEqual(1);
      });
  }, 8000);

  it('/GET NG get post by id', async () => {
    const postId = 9999;
    const url = `/${baseUrl}/post/${postId}`;
    // console.debug('debug-get-post-url', url);
    return request(app.getHttpServer()).get(url).expect(500);
  }, 8000);
});
