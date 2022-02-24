import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PlayerFactionState } from "./player-faction.reducer";

const getPlayerFactionFeatureState = createFeatureSelector<PlayerFactionState>('playerFactions');

export const getPlayerFactions = createSelector(
    getPlayerFactionFeatureState,
    state => state.playerFactions
)