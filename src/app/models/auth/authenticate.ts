export class Authenticate {
  private email: string;
  private password: string;

  constructor(content: any) {
    this.email = content.email;
    this.password = content.password;
  }

  toString(): string {
    return '{' +
      '"email": "' + this.email + '",' +
      '"password": "' + this.password + '"' +
      '}';
  }

  serialize(): any {
    return {
      email: this.email,
      password: this.password
    };
  }

  deserialize(content: any): void {
    this.email = content.email;
    this.password = content.password;
  }

}
