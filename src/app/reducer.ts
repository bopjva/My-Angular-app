import { LOAD_SPINNER } from "./action";
import { HomeState, HOME_INITIALSTATE, homeReducer } from './store/home.reducer';
import { ActionReducerMap } from '@ngrx/store';
export interface AppState {
  homeState: HomeState,
}
export const APP_INIITIALSTATE = {
  homeState: HOME_INITIALSTATE
};
export const appReducer: ActionReducerMap<AppState> = {
  homeState: homeReducer
}