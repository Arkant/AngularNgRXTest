import { initialUserState, IUserState } from './../states/user.state';
import { EUserActions, UserActions } from './../actions/user.actions';

export const userReducer = (state = initialUserState, action: UserActions): IUserState => {
  switch (action.type) {
    case EUserActions.GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload
      }
    }
    default: 
      return state;
  }
}