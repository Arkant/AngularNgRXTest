import { Action } from '@ngrx/store';
import { IUser } from 'src/app/shared/interfaces/user.interface';

export enum EUserActions {
  GET_USER = '[User] Get User',
  GET_USER_SUCCESS = '[User] Ge User Success'
};

export class GetUser implements Action {
  readonly type = EUserActions.GET_USER;

  constructor(public payload: string) { }
}

export class GetUserSuccess implements Action {
  readonly type = EUserActions.GET_USER_SUCCESS;

  constructor(public payload: IUser) { }
}

export type UserActions = GetUser | GetUserSuccess;
