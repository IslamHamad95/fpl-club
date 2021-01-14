import {
  FETCH_GAMEWEEK_REQUEST,
  FETCH_GAMEWEEK_SUCCESS,
  FETCH_GAMEWEEK_FAILURE,
} from "./GWActionTypes";
const initialGameWeek = {
  isLoading: false,
  gameWeek: {},
  error: "",
};

const GameWeekReducer = (state = initialGameWeek, action) => {
  switch (action.type) {
    case FETCH_GAMEWEEK_REQUEST:
      return {
        ...state,
        isLoading:true
      };
    case FETCH_GAMEWEEK_SUCCESS:
      return {
        isLoading:false,
        gameWeek:{...action.payload},
        error:""
      };
    case FETCH_GAMEWEEK_FAILURE:
      return {
        isLoading:false,
        gameWeek:{},
        error:action.payload
      };
    default:
      return state;
  }
};

export default GameWeekReducer;
