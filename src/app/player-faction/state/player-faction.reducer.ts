import { createReducer, on } from "@ngrx/store";
import { PlayerFaction } from "../interfaces/player-faction.interface";
import { PlayerFactionApiActions } from "./actions";
import { deleteAllFailure } from "./actions/player-faction-api.actions";

export interface PlayerFactionState {
    playerFactions: PlayerFaction[];
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
    }),
    on(PlayerFactionApiActions.deleteAllSuccess, (state, action): PlayerFactionState => {
        return {
            ...state,
            playerFactions: []
        }
    })
)