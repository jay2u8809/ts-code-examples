import { ApiProperty } from '@nestjs/swagger';

export class PostResponseDto {
  @ApiProperty({
    description: 'user id',
  })
  userId: string;

  @ApiProperty({
    description: 'primary key',
  })
  id: number;

  @ApiProperty({
    description: 'title of post',
  })
  title: string;

  @ApiProperty({
    description: 'content of post',
  })
  body: string;
}
