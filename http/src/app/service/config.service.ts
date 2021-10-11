import { Injectable } from '@angular/core';
import { User } from '../model/user';

export interface ITableColumn {
  key: keyof User;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  userTableCols: ITableColumn[] = [
    {key: 'id', title: '#'},
    {key: 'firstName', title: 'First Name'},
    {key: 'lastName', title: 'Last Name'},
    {key: 'email', title: 'Email'},
    {key: 'address', title: 'Address'},
    {key: 'active', title: 'Active'},
  ];

  constructor() { }
}
