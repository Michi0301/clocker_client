export class Settings {
  username: String;
  password: String;
  server: String;

  static readonly localStorageKey = 'settings';

  constructor(username: String, password: String, server: String) {
    this.username = username;
    this.password = password;
    this.server   = server;
  }

  save() {
    localStorage.setItem(Settings.localStorageKey, this.toJson());
  }

  toJson() {
    return JSON.stringify({
      username: this.username,
      password: this.password,
      server:   this.server    
    });
  }

  static get(attribute: any) {
    return JSON.parse(localStorage.getItem(Settings.localStorageKey))[attribute];
  }

  static present() {
    return localStorage.getItem(Settings.localStorageKey) != null;
  }
}
