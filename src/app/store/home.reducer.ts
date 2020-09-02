import { Action } from '@ngrx/store';
import { SEARCH_RESULTS, 
            FETCH_IDS, 
            LOAD_SPINNER, 
            SCHOOL_STUDENTS_FETCH} from '../actions';
import { StudentModel } from '../school/models/StudentModel';

export interface HomeState {
    studentList: StudentModel,
    studentIds: Array<string>,
    loading: boolean,
    studentsList: Array<StudentModel>,
}
export const HOME_INITIAL_STATE: HomeState = {
    studentList: new StudentModel(),
    studentIds: [],
    loading: false,
    studentsList: [],

};

export function homeReducer(state = HOME_INITIAL_STATE, action) {
    switch (action.type) {
        case SEARCH_RESULTS: return { ...state, studentList: action.payload };
        case FETCH_IDS: return { ...state, studentIds: action.payload };
        case LOAD_SPINNER: return {...state, loading: action.payload};
        case SCHOOL_STUDENTS_FETCH: return {...state, studentsList: action.payload};
        default: return state;
    }
}