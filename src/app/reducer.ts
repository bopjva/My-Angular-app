import { LOAD_SPINNER } from "./action";
import { HomeState, HOME_INITIALSTATE, homeReducer } from './store/home.reducer';
import { UserState, USER_INITIAL_STATE, userReducer } from './user/user.reducer';
import { ActionReducerMap } from '@ngrx/store';
export interface AppState {
  homeState: HomeState,
  userState: UserState
}
export const APP_INIITIALSTATE = {
  homeState: HOME_INITIALSTATE,
  userState: USER_INITIAL_STATE
};
export const appReducer: ActionReducerMap<AppState> = {
  homeState: homeReducer,
  userState: userReducer
}