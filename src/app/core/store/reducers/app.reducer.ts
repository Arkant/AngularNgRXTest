import { IAppState } from './../states/app.state';
import { ActionReducerMap } from "@ngrx/store";
import { routerReducer } from '@ngrx/router-store';
import { userReducer } from './user.reducer';

export const appReducer: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  user: userReducer
}