import { createAction, props } from "@ngrx/store";
import { PlayerFactionInterface } from "../../interfaces/player-faction.interface";

export const loadPlayerFactions = createAction('[Player Faction Page] Load');

export const updatePlayerFaction = createAction(
    '[Player Faction Page] Update',
    props<{ playerFaction: PlayerFactionInterface }>()
)

export const createPlayerFaction = createAction(
    '[Player Faction Page] Create',
    props<{ playerFaction: PlayerFactionInterface }>()
)

export const deletePlayerFaction = createAction(
    '[Player Faction Page] Delete',
    props<{ playerFactionId: number }>()
)