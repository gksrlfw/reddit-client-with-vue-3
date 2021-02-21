import AuthStore from "@/store/AuthStore.ts";

const authStore = new AuthStore();
export const authState = authStore.getAuthState();
export async function login(email: string, password: string) {
  try {
    console.log('login', email, password);
    await authStore.login({ email: 'ads', password: 'ads' });
  }
  catch(err) {
    console.error(err);
  }
}
  
export async function register(email: string, password: string, username: string) {
  try {
    console.log('register', email, password, username);  
    await authStore.register({ email: 'ads', password: 'ads', username: username });
  }
  catch(err) {
    console.error(err);
  }
}

export function logout() {
  console.log('hello');
  authStore.logout();
  console.log(authState);
  
}