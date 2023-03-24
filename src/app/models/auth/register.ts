export class Register {
  private company: string;
  private lastname: string;
  private firstname: string;
  private email: string;
  private password: string;

  constructor(data: any) {
    this.company = data.company;
    this.lastname = data.lastname;
    this.firstname = data.firstname;
    this.email = data.email;
    this.password = data.password;
  }

  toString(): string {
    return '{' +
      '"company": "' + this.company + '",' +
      '"lastname": "' + this.lastname + '",' +
      '"firstname": "' + this.firstname + '",' +
      '"email": "' + this.email + '",' +
      '"password": "' + this.password + '"' +
      '}';
  }

  serialize(): any {
    return {
      company: this.company,
      lastname: this.lastname,
      firstname: this.firstname,
      email: this.email,
      password: this.password
    };
  }

  deserialize(content: any): void {
    this.company = content.company;
    this.lastname = content.lastname;
    this.firstname = content.firstname;
    this.email = content.email;
    this.password = content.password;
  }

}
