import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import axios, { AxiosResponse } from 'axios';
import { PostDto } from './dto/post.dto';

const TAG = 'AXIOS_SERVICE';

@Injectable()
export class AxiosService {
  private readonly DATA_URL = 'https://jsonplaceholder.typicode.com';

  async getPost(id: number): Promise<PostDto> {
    const url = `${this.DATA_URL}/posts/${id}`;
    console.log(TAG, 'get-post-url', url);
    try {
      const result: AxiosResponse = await axios.get(url);
      // console.debug(TAG, 'debug-result', result);
      return !result?.data
        ? undefined
        : plainToInstance(PostDto, {
            ...result.data,
          });
    } catch (e) {
      console.error(
        TAG,
        'err',
        { name: e.name, message: e.message },
        JSON.stringify(e),
      );
      throw new InternalServerErrorException(e.message);
    }
  }
}
