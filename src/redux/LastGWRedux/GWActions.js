
import {
  FETCH_GAMEWEEK_REQUEST,
  FETCH_GAMEWEEK_SUCCESS,
  FETCH_GAMEWEEK_FAILURE,
} from "./GWActionTypes";

export const fetchGameWeekRequest = () => {
  return {
    type: FETCH_GAMEWEEK_REQUEST,
  };
};

export const fetchGameWeekSuccess = (gameWeek) => {
  return {
    type: FETCH_GAMEWEEK_SUCCESS,
    payload: gameWeek,
  };
};

export const fetchGameWeekFailure = (error) => {
  return {
    type: FETCH_GAMEWEEK_FAILURE,
    payload: error,
  };
};

export const fetchGameWeek = (id) => {
  return (dispatch) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/corsdemo";
    dispatch(fetchGameWeekRequest());
    fetch(proxyurl + "https://fantasy.premierleague.com/api/bootstrap-static/")

      .then((response) => {
        return response.json()
      }).then(data=>{
        
        dispatch(fetchGameWeekSuccess(data.events[id-1]));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchGameWeekFailure(error.message));
      });
  };
};
