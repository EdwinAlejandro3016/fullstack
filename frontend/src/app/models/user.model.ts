import {Heroe} from '../models/heroe.model';

export interface User {
  name?:string;
  email:string;
  password:string;
  role?:string;
  usersRegistered?:number;
  heroes?: Heroe[];
  lastTimeSystem?: Date;
}
