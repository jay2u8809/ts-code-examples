import { Controller, Get, Param } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { AxiosService } from './axios.service';
import { PostResponseDto } from './dto/post-response.dto';
import { PostDto } from './dto/post.dto';

const TAG = 'AXIOS_CONTROLLER';

@Controller('axios')
export class AxiosController {
  constructor(private readonly axiosService: AxiosService) {}

  @Get('post/:id')
  public async getPost(@Param('id') postId: number): Promise<PostResponseDto> {
    console.log(TAG, 'get-post-param', postId);

    const post: PostDto = await this.axiosService.getPost(postId);

    return plainToInstance(PostResponseDto, {
      ...post,
    });
  }
}
