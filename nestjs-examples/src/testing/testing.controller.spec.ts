import { Test } from '@nestjs/testing';
import { TestingController } from './testing.controller';
import { TestingModule } from './testing.module';
import { TestingService } from './testing.service';
import { async } from 'rxjs';

describe('TestingController', () => {
  let testingController: TestingController;
  let testingService: TestingService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [TestingModule],
    }).compile();

    testingService = module.get<TestingService>(TestingService);
    testingController = module.get<TestingController>(TestingController);
  });

  it('should be defined', () => {
    expect(testingController).toBeDefined();
    expect(testingService).toBeDefined();
  });

  it.skip('mock', async () => {
    const mock = {
      id: `id_0`,
      name: `name_0`,
      gender: 'M',
      address: `address_0`,
    };
    jest
      .spyOn(testingService, 'fetchTestingUser')
      .mockImplementation(async () => mock);

    const param = 'id_3';
    // const result = await testingController.fetchUser(param);
    // console.debug('mock-result', result);

    expect(await testingController.fetchUser(param)).toEqual(mock);
  });
});
