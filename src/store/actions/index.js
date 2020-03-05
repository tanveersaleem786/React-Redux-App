import axios from "axios"

export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_FAILURE  = "FETCHING_DATA_FAILURE";


export const getData = () => dispatch => {
     
    //e.preventDefault();
     // initially send the action FETCHING_QUOTE_START so that we
     // get our state updated to support a fetch
     dispatch({type: FETCHING_DATA_START});

     axios
     //.get("https://api.kanye.rest")
     .get("https://dog.ceo/api/breeds/image/random")
     .then(res => {
        console.log("res", res);
        // send the action FETCHING_QUOTE_SUCCESS and update state
        // to show the fetched data
         dispatch({type: FETCHING_DATA_SUCCESS, payload: res.data.message});
     }) 
     .catch(err => {
        console.log("err", err);
        // send the action FETCHING_QUOTE_FAILURE and update state
        // to show the error message
        dispatch({
          type: FETCHING_DATA_FAILURE,
          payload: `${err.response.message} with response code ${
            err.response.code
          }`
        });
     })
}
