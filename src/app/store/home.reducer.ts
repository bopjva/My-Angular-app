import { LOAD_SPINNER, STUDENT_ID_LIST, STUDENT_BY_ID } from "../action";

export interface HomeState {
  loading: boolean;
  idList: any;
  student: any;
}
export const HOME_INITIALSTATE: HomeState = {
  loading: false,
  idList: null,
  student: null
}
export function homeReducer(state = HOME_INITIALSTATE, action) {
  debugger;
  switch (action.type) {
    case LOAD_SPINNER:
      console.log('2');
      return { ...state, loading: action.payload }
      break;
    case STUDENT_ID_LIST:
      console.log('5');
      return { ...state, idList: action.payload }
      break;
    case STUDENT_BY_ID:
      return { ...state, student: action.payload }
      break;

    default: return state;
      break;
  }
}

// res ={data: ['CT01', 'ct02e'], status: 1}
// store: {
//   loading : false,
//   idList: null
// }

// store: {
//   loading : true,
// }

// store: {
//   loading : true,
//   idList: {data: ['CT01', 'ct02e'], status: 1}
// }

