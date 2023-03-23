import {Employee} from "./employee";

export class User {
  id!: number;
  company!: string;
  lastname!: string;
  firstname!: string;
  email!: string;
  password!: string;
  role!: Roles.user;
  adviserId!: Employee;
  isEnabled!: boolean;
}
