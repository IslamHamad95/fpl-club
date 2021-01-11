import {  GET_GW_DATA_API } from "./GWActionTypes";
const initialGW = {};

const GameWeekReducer = (state = initialGW, action) => {
  switch (action.type) {
    case GET_GW_DATA_API:
      return {
      ...action.payload
      };

    default:
      return state;
  }
};

export default GameWeekReducer;
