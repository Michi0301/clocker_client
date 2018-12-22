export class Settings {
  username: String;
  password: String;

  static readonly localStorageKey = 'settings';

  constructor(username: String, password: String) {
    this.username = username;
    this.password = password;
  }

  save() {
    localStorage.setItem(Settings.localStorageKey, this.toJson());
  }

  toJson() {
    return JSON.stringify({
      username: this.username,
      password: this.password    
    });
  }

  static get(attribute: String) {
    return JSON.parse(localStorage.getItem(Settings.localStorageKey))[attribute];
  }

  static present() {
    return localStorage.getItem(Settings.localStorageKey) != null;
  }
}
