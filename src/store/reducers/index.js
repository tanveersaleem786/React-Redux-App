import {FETCHING_DATA_START, FETCHING_DATA_SUCCESS} from '../actions';

const initialState = {
    apiData : "",
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_DATA_START:
          return {
            ...state,
            isFetching: true,
            error: ""
          };
        case FETCHING_DATA_SUCCESS:
            //console.log("suc",action.payload);
          return {
            ...state,
            isFetching: false,
            apiData: action.payload
          };
        default:
          return state;
      }
};