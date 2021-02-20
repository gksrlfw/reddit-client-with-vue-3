import { LoginRequest } from "@/interface/auth/LoginRequest";
import { LoginResponse } from "@/interface/auth/LoginResponse";
import { RegisterRequest } from "@/interface/auth/RegisterRequest";
import { reactive, toRefs } from "vue";
import { BASE_URL } from "./Baseurl";

const fetchOptions = { 
  method: 'POST',
  // mode: "cors",
  // credentials: "same-origin",
  headers: {
    'Content-Type': 'application/json'
  }
}


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
        body: JSON.stringify(loginRequest) 
      });
      if(response.ok) {
        // TODO
        const data = await response.json();
        console.log(response, data);
        sessionStorage.setItem('token', data.token);
        this.succeedLogin({ username: data.username, email: data.email })
      }
      return this.getAuthState();
    } catch (err) {
      console.error(err);
    }
  }

  public async register(registerRequest: RegisterRequest) {
    try {
      registerRequest = {
        email: 'gksrlfw1@naver.com',
        password: 'password',
        username: 'gksrlf1'
      };
      const response = await fetch(`${BASE_URL}/auth/register`, { 
        ...fetchOptions, 
        body: JSON.stringify(registerRequest) 
      });
      // TODO
      console.log(response);
      
    } catch (err) {
      console.error(err);
    }
  }

  public async refresh() {
    const token = sessionStorage.getItem('token');
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

