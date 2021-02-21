import AuthStore from "@/store/AuthStore.ts";

const authStore = new AuthStore();
export const authState = authStore.getAuthState();
export async function login(email: string, password: string) {
  try {
    console.log('login', email, password);
    await authStore.login({ email: 'ads', password: 'ads' });
    return authState.isLoginError;
  }
  catch(err) {
    console.error(err);
  }
}
  
export async function register(email: string, password: string, username: string) {
  try {
    console.log('register', email, password, username);  
    await authStore.register({ email: 'ads', password: 'ads', username: username });
    return authState.isRegisterError;
  }
  catch(err) {
    console.error(err);
  }
}

export function logout() {
  authStore.logout();
}