import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TestingController } from './testing.controller';
import { TestingService } from './testing.service';

const userId = 'id_0';

describe('TestingE2eController', () => {
  let app: INestApplication;
  let testingController: TestingController;
  let testingService: TestingService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [TestingModule],
      providers: [TestingService],
      controllers: [TestingController],
    })
      .overrideProvider(TestingService)
      // .useValue(new TestingService())
      .useClass(TestingService)
      .compile();

    app = module.createNestApplication();
    await app.init();

    testingService = await module.resolve(TestingService);
    testingController = await module.resolve(TestingController);
  });

  it('should be defined', () => {
    expect(app).toBeDefined();
    expect(testingController).toBeDefined();
    expect(testingService).toBeDefined();
  });

  it.skip('/GET fetch user', async () => {
    return request(app.getHttpServer())
      .get(`/testing/user/${userId}`)
      .expect(200)
      .expect({
        id: `id_0`,
        name: `name_0`,
        gender: 'M',
        address: `address_0`,
      });
  }, 8000);
});
