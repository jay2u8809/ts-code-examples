import { Injectable } from '@nestjs/common';
import { TestingUserDto } from './dto/testing-user.dto';

@Injectable()
export class TestingService {
  async fetchTestingUser(id: string): Promise<TestingUserDto> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result: TestingUserDto = this.generateTestingUserList().find(
          (item: TestingUserDto) => item.id === id,
        );
        if (!result) {
          reject(new Error('not exist'));
        }
        resolve(result);
      }, 300);
    });
  }

  // === private ===
  private generateTestingUserList(): TestingUserDto[] {
    const result: TestingUserDto[] = [];
    for (let idx = 0; idx < 10; idx++) {
      result.push({
        id: `id_${idx}`,
        name: `name_${idx}`,
        gender: idx % 2 == 0 ? 'M' : 'F',
        address: `address_${idx}`,
      });
    }
    return result;
  }
}
