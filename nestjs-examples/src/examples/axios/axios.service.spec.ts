import { Test, TestingModule } from '@nestjs/testing';
import { AxiosService } from './axios.service';
import { InternalServerErrorException } from '@nestjs/common';

/**
 * Test Web Site: https://jsonplaceholder.typicode.com/
 */

const TAG = 'AXIOS_SERVICE';

describe('AxiosService', () => {
  let service: AxiosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AxiosService],
    }).compile();

    service = module.get<AxiosService>(AxiosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('OK - get post by id', async () => {
    const id = 10;
    const result = await service.getPost(id);
    console.debug(TAG, 'result-get-post-by-id', result);

    expect(() => {
      expect(result).toBeDefined();
      expect(result.id).toEqual(10);
    });
    // await expect(service.getPost(id)).resolves.toBeDefined();
  }, 8000);

  it('NG - get post by id', async () => {
    const id = 9999;
    await expect(service.getPost(id)).rejects.toThrowError(
      InternalServerErrorException,
    );
  }, 8000);
});
