import { IUser } from './../../../shared/interfaces/user.interface';

export interface IUserState {
  user: IUser;
}

export const initialUserState = {
  user: null,
}