import {ResetPasswordDto} from "./dto/reset-password.dto";

const TAG = 'LoginService';

export const LoginService = {
  /**
   * login
   * @param userId 
   * @param password 
   * @returns 
   */
  login: async (userId: string, password: string): Promise<boolean> => {
    console.debug(TAG, 'login', userId, password);
    // TODO
    return true;
  },

  /**
   * reset user password
   * @param params 
   * @returns 
   */
  resetPassword: async (params: ResetPasswordDto): Promise<boolean> => {
    console.debug(TAG, 'reset-password', JSON.stringify(params));
    // TODO
    return true;
  }
}