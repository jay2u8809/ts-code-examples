
const TAG = 'LoginService';

export class LoginService {
  async login(userId: string, password: string): Promise<boolean> {
    console.debug(TAG, 'login', userId, password);
    // TODO
    return true;
  }
}