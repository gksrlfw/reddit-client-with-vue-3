import { computed, reactive, toRefs } from "vue";
import { LoginRequest } from "@/interface/auth/LoginRequest";
import { LoginResponse } from "@/interface/auth/LoginResponse";
import { RegisterRequest } from "@/interface/auth/RegisterRequest";
import { BASE_URL, fetchOptions, TOKEN } from "./GlobalVariablel";

export default class AuthStore {
  private authState = reactive({
    isLoginError: false,
    isRegisterError: false,
    isLogin: false,
    loginResponse: {},
  });

  public getAuthState() {
    return toRefs(this.authState);
  }

  public async login(loginRequest: LoginRequest) {
    try {
      loginRequest = {
        email: 'gksrlfw1@naver.com',
        password: 'password',
      };
      const response = await fetch(`${BASE_URL}/auth/login`, { 
        ...fetchOptions, 
        method: 'POST',
        body: JSON.stringify(loginRequest) 
      });
      if(response.ok) {
        // TODO
        const data = await response.json();
        sessionStorage.setItem(TOKEN, data.token);
        this.succeedLogin({ username: data.username, email: data.email });
        return this.getAuthState();
      }
      this.failedLogin();
    } 
    catch (err) {
      console.error(err);
      this.failedLogin();
    }
  }

  public async register(registerRequest: RegisterRequest) {
    try {
      registerRequest = {
        email: 'gksrlfw123@naver.com',
        password: 'password',
        username: 'gksrlf123'
      };
      const response = await fetch(`${BASE_URL}/auth/register`, { 
        ...fetchOptions, 
        method: 'POST',
        body: JSON.stringify(registerRequest) 
      });
      // TODO
      console.log(response);
      if(response.ok) {
        return this.succeedRegister();
      }
      this.failedRegister();
    } 
    catch (err) {
      console.error(err);
      this.failedRegister();

    }
  }

  public async refresh() {
    try {
      const token = sessionStorage.getItem(TOKEN);
      if(!token) return;
      const response = await fetch(`${BASE_URL}/auth/refresh`, {
        ...fetchOptions,
        method: 'POST',
        // TOKEN: token,
      });
    }
    catch(err) {
      console.error(err);
    }
  }

  public logout() {
    if(sessionStorage.getItem(TOKEN)) sessionStorage.removeItem(TOKEN);
    this.clearState();
  }

  private clearState() {
    this.authState.isLogin = false;
    this.authState.isLoginError = false;
    this.authState.isRegisterError = false;
    this.authState.loginResponse = {};
  }

  private succeedLogin(loginResponse: LoginResponse) {    
    this.authState.loginResponse = loginResponse;
    this.authState.isLogin = true;
  }

  private failedLogin() {
    this.authState.isLoginError = true;
  }

  private failedRegister() {
    this.authState.isRegisterError = true;
  }

  private succeedRegister() {
    this.authState.isRegisterError = false;
  }
}

