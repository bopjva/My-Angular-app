import { StudentModel } from "../../models/StudentModel";
import { SCHOOL_STUDENTS_FETCH } from "../../actions";

export interface SchoolState {
     studentsList: Array<StudentModel>,
}

export const  SCHOOL_INITIAL_STATE: SchoolState = {
    studentsList: [],
}

export function schoolReducer(state = SCHOOL_INITIAL_STATE, action) {
    switch(action.type) {
        case SCHOOL_STUDENTS_FETCH: return {...state, studentsList: action.payload};
    }
}