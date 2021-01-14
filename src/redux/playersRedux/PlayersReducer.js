import {
  FETCH_PLAYERS_REQUEST,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_FAILURE,
} from "./PlayersActionTypes";
const initialPlayers = {
  isLoading: false,
  players: [],
  error: "",
};

const playersReducer = (state = initialPlayers, action) => {
  switch (action.type) {
    case FETCH_PLAYERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PLAYERS_SUCCESS:
      return {
        isLoading: false,
        palyers: [...action.payload],
        error: "",
      };
    case FETCH_PLAYERS_FAILURE:
      return {
        isLoading: false,
        players: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default playersReducer;
