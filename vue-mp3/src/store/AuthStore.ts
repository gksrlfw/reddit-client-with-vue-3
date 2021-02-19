import { LoginRequest } from "@/interface/auth/LoginRequest";
import { RegisterRequest } from "@/interface/auth/RegisterRequest";
import { reactive } from "vue";

const fetchOptions = { 
  method: 'POST',
  // mode: "cors",
  // credentials: 'same-origin',
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
    return this.authState;
  }

  public async login(loginRequest: LoginRequest) {
    try {
      const response = await fetch("", { 
        ...fetchOptions, 
        body: JSON.stringify(loginRequest) 
      });
      if(response.ok) {
        // TODO
      }
    } catch (err) {
      console.error(err);
    }
  }

  public async register(registerRequest: RegisterRequest) {
    try {
      const response = await fetch("", { 
        ...fetchOptions, 
        body: JSON.stringify(registerRequest) 
      });
      // TODO
    } catch (err) {
      console.error(err);
    }
  }

}

