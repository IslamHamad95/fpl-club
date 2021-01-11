import { GET_GW_DATA_API} from "./GWActionTypes"

export const getGameWeekData=(gameweek)=>{
    return{
        type:GET_GW_DATA_API,
        payload: gameweek
    }

}
