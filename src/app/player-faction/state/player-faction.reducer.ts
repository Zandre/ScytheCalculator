import { createReducer, on } from "@ngrx/store";
import { PlayerFactionInterface } from "../interfaces/player-faction.interface";
import { PlayerFactionPageActions, PlayerFactionApiActions } from "./actions";

export interface PlayerFactionState {
    playerFactions: PlayerFactionInterface[];
}

const initialState: PlayerFactionState = {
    playerFactions: []
}

// TODO: implement error handling

export const playerFactionReducer = createReducer<PlayerFactionState>(
    initialState,
    on(PlayerFactionApiActions.loadSuccess, (state, action): PlayerFactionState => {
        return {
            ...state,
            playerFactions: action.playerFactions
        };
    }),
    on(PlayerFactionApiActions.createSuccess, (state, action): PlayerFactionState => {
        return {
            ...state,
            playerFactions: [...state.playerFactions, action.playerFaction]
        };
    }),
    on(PlayerFactionApiActions.updateSuccess, (state, action): PlayerFactionState => {
        const updatedPlayerFactions = state.playerFactions.map(
            untouchedFaction => action.playerFaction.id === untouchedFaction.id ? 
                action.playerFaction : 
                untouchedFaction)
        return {
            ...state,
            playerFactions: updatedPlayerFactions
        };
    }),
    on(PlayerFactionApiActions.deleteSuccess, (state, action): PlayerFactionState => {
        return {
            ...state,
            playerFactions: state.playerFactions.filter(faction => faction.id !== action.playerFactionId)
        };
    })
)