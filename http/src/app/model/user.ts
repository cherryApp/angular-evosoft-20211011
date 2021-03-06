export class User {
  id: number = 0;
  lastName: string = '';
  firstName: string = '';
  email: string = '';
  password?: string = '';
  address: string = '';
  active: boolean = false;
  accessToken?: string;
  role?: number = 0;
}
