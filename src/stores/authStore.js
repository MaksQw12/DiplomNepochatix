import { makeAutoObservable } from 'mobx';
import AuthService from '../services/authService';
export default class AuthStore {
  userId = null;
  Isrequest = false;
  IsAuth = false;
  constructor() {
    makeAutoObservable(this);
  }

  async postGetCode(authData) {
    try {
      const response = await AuthService.postGetCode(authData);
      this.userId = response.data;
      if (response.status === 200) {
        this.Isrequest = true;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async postSendCode(authData) {
    try {
      const response = await AuthService.postSendCode(authData);
      if (response.status === 200) {
        console.log('you SignUp your id : ' + this.userId);
        this.IsAuth = true;
      }
    } catch (e) {
      console.log(e);
    }
  }
}
