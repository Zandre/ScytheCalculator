import { createReducer, on } from "@ngrx/store";
import { PlayerFaction } from "../interfaces/player-faction.interface";
import { PlayerFactionApiActions } from "./actions";

export interface PlayerFactionState {
    playerFactions: PlayerFaction[],
    error: string
}

const initialState: PlayerFactionState = {
    playerFactions: [],
    error: ''
}

export const playerFactionReducer = createReducer<PlayerFactionState>(
    initialState,
    on(PlayerFactionApiActions.loadSuccess, (state, action): PlayerFactionState => {
        return {
            ...state,
            playerFactions: action.playerFactions,
            error: ''
        };
    }),
    on(PlayerFactionApiActions.loadFailure, (state, action): PlayerFactionState => {
        return {
            ...state,
            playerFactions: [],
            error: action.error
        };
    }),
    on(PlayerFactionApiActions.createSuccess, (state, action): PlayerFactionState => {
        return {
            ...state,
            playerFactions: [...state.playerFactions, action.playerFaction],
            error: ''
        };
    }),
    on(PlayerFactionApiActions.createFailure, (state, action): PlayerFactionState => {
        return {
            ...state,
            error: action.error
        };
    }),
    on(PlayerFactionApiActions.updateSuccess, (state, action): PlayerFactionState => {
        const updatedPlayerFactions = state.playerFactions.map(
            untouchedFaction => action.playerFaction.id === untouchedFaction.id ? 
                action.playerFaction : 
                untouchedFaction)
        return {
            ...state,
            playerFactions: updatedPlayerFactions,
            error: ''
        };
    }),
    on(PlayerFactionApiActions.updateFailure, (state, action): PlayerFactionState => {
        return {
            ...state,
            error: action.error
        };
    }),
    on(PlayerFactionApiActions.deleteSuccess, (state, action): PlayerFactionState => {
        return {
            ...state,
            playerFactions: state.playerFactions.filter(faction => faction.id !== action.playerFactionId),
            error: ''
        };
    }),
    on(PlayerFactionApiActions.deleteFailure, (state, action): PlayerFactionState => {
        return {
            ...state,
            error: action.error
        };
    }),
    on(PlayerFactionApiActions.deleteAllSuccess, (state, action): PlayerFactionState => {
        return {
            ...state,
            playerFactions: [],
            error: ''
        };
    }),
    on(PlayerFactionApiActions.deleteAllFailure, (state, action): PlayerFactionState => {
        return {
            ...state,
            error: action.error
        };
    }),
)