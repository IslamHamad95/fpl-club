import  GameWeekReducer from "./LastGWRedux/GameWeekReducer"
import PlayersReducer from "./playersRedux/PlayersReducer"
import {combineReducers} from "redux"
const rootReducer=combineReducers({gameWeek:GameWeekReducer, players:PlayersReducer})

export default rootReducer;