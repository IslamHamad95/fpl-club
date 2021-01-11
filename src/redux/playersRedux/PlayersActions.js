import { GET_PLAYERS_DATA_API} from "./PlayersActionTypes"

export const getPlayersData=(players)=>{
    return{
        type:GET_PLAYERS_DATA_API,
        payload: players
    }

}
