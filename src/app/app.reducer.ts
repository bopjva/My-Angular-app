// import * as homeState from './store/home.reducer';
// import { ActionReducerMap } from '@ngrx/store';
import { HomeState, homeReducer, HOME_INITIAL_STATE } from './store/home.reducer';
import { ActionReducerMap } from '@ngrx/store';
// import { SchoolState, SCHOOL_INITIAL_STATE, schoolReducer } from './school/store/store.reducer';

export interface AppState {
    homeState: HomeState,
    // schoolState: SchoolState
}

export const INITIAL_STATE: AppState = {
    homeState: HOME_INITIAL_STATE,
    // schoolState: SCHOOL_INITIAL_STATE,
}

export const appReducer: ActionReducerMap<AppState> = {
    homeState: homeReducer,
    // schoolState: schoolReducer,
};