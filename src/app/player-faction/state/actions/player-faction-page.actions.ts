import { createAction, props } from "@ngrx/store";
import { PlayerFaction } from "../../interfaces/player-faction.interface";

export const loadPlayerFactions = createAction('[Player Faction Page] Load');

export const updatePlayerFaction = createAction(
    '[Player Faction Page] Update',
    props<{ playerFaction: PlayerFaction }>()
)

export const createPlayerFaction = createAction(
    '[Player Faction Page] Create',
    props<{ playerFaction: PlayerFaction }>()
)

export const deletePlayerFaction = createAction(
    '[Player Faction Page] Delete',
    props<{ playerFactionId: number }>()
)