export class Settings {
  username: string;
  password: string;
  server: string;
  autoFetch: boolean;
  useAsyncApi: boolean;

  static readonly localStorageKey = 'settings';

  constructor(options: { username: string, password: string, server: string, autoFetch: boolean, useAsyncApi: boolean}) {
    this.username = options.username;
    this.password = options.password;
    this.server = options.server;
    this.autoFetch = options.autoFetch;
    this.useAsyncApi = options.useAsyncApi;
  }

  save() {
    localStorage.setItem(Settings.localStorageKey, this.toJson());
  }

  toJson() {
    return JSON.stringify({
      username: this.username,
      password: this.password,
      server:   this.server,
      autoFetch: this.autoFetch,
      useAsyncApi: this.useAsyncApi
    });
  }

  static get(attribute: any) {
    if (!Settings.present()) return;

    return JSON.parse(localStorage.getItem(Settings.localStorageKey))[attribute];
  }

  static present() {
    return localStorage.getItem(Settings.localStorageKey) != null;
  }
}
