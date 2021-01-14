import {
  FETCH_PLAYERS_REQUEST,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_FAILURE,
} from "./PlayersActionTypes";

export const fetchPlayersRequest = () => {
  return {
    type: FETCH_PLAYERS_REQUEST,
  };
};

export const fetchPlayersSuccess = (players) => {
  return {
    type: FETCH_PLAYERS_SUCCESS,
    payload: players,
  };
};

export const fetchPlayersFailure = (err) => {
  return {
    type: FETCH_PLAYERS_FAILURE,
    payload: err,
  };
};

export const fetchPlayers = () => {
  return (dispatch) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    dispatch(fetchPlayersRequest());
    fetch(proxyurl + "https://fantasy.premierleague.com/api/bootstrap-static/")

      .then((response) => {
        return response.json()
      }).then(data=>{
        
        dispatch(fetchPlayersSuccess(data.elements));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchPlayersFailure(error.message));
      });
  };
};
