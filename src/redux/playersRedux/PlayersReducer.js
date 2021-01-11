import {  GET_PLAYERS_DATA_API } from "./PlayersActionTypes";
const initialPlayers = [];

const playersReducer = (state = initialPlayers, action) => {
  switch (action.type) {
    case GET_PLAYERS_DATA_API:
      return (state=[...state,...action.payload ]);

    default:
      return state;
  }
};

export default playersReducer;
