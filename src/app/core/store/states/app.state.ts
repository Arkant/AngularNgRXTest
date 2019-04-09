import { IUserState, initialUserState } from './user.state';
import { RouterReducerState } from '@ngrx/router-store';

export interface IAppState {
  router?: RouterReducerState;
  user: IUserState;
}

export const initialAppState = {
  user: initialUserState
}

export function getInitialState(): IAppState {
  return initialAppState;
}