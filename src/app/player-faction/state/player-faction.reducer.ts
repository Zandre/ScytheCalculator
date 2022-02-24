import { createReducer } from "@ngrx/store";
import { PlayerFactionInterface } from "../interfaces/player-faction.interface";

export interface PlayerFactionState {
    playerFactions: PlayerFactionInterface[];
}

const initialState: PlayerFactionState = {
    playerFactions: []
}

export const playerFactionReducer = createReducer<PlayerFactionState>(
    initialState
)