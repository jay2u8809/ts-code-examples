import { Controller, Get, Param } from '@nestjs/common';
import { TestingService } from './testing.service';
import { TestingUserDto } from './dto/testing-user.dto';

@Controller('testing')
export class TestingController {
  constructor(private readonly testingService: TestingService) {}

  @Get('user/:id')
  async fetchUser(@Param('id') userId: string): Promise<TestingUserDto> {
    return this.testingService.fetchTestingUser(userId);
  }
}
