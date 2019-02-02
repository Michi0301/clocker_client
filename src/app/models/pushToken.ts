export class PushToken {
  token: string;

  static readonly localStorageKey = 'pushToken';

  static save(token) {
    localStorage.setItem(PushToken.localStorageKey, token);
  }

  static present() {
    return PushToken.get() != null;
  }

  static get() {
    return localStorage.getItem(PushToken.localStorageKey);
  }
}
