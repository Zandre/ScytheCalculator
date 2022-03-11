import { createAction, props } from "@ngrx/store";
import { PlayerFaction } from "../../interfaces/player-faction.interface";

export const loadSuccess = createAction(
    '[Player Faction API] Load Success',
    props<{ playerFactions: PlayerFaction[] }>()
);

export const loadFailure = createAction(
    '[Player Faction API] Load Failure',
    props<{ error: string }>()
);

export const getWinningPlayerFactionSuccess = createAction(
    '[Player Faction API] Get Winning Player Faction Success',
    props<{ playerFaction: PlayerFaction }>()
);

export const getWinningPlayerFactionFailure = createAction(
    '[Player Faction API] Get Winning Player Faction Failure',
    props<{ error: string }>()
);

export const updateSuccess = createAction(
    '[Player Faction API] Update Success',
    props<{ playerFaction: PlayerFaction }>()
);

export const updateFailure = createAction(
    '[Player Faction API] Update Failure',
    props<{ error: string }>()
);

export const createSuccess = createAction(
    '[Player Faction API] Create Success',
    props<{ playerFaction: PlayerFaction }>()
);

export const createFailure = createAction(
    '[Player Faction API] Create Failure',
    props<{ error: string }>()
);

export const deleteSuccess = createAction(
    '[Player Faction API] Delete Success',
    props<{ playerFactionId: number }>()
);

export const deleteFailure = createAction(
    '[Player Faction API] Delete Failure',
    props<{ error: string }>()
);

export const resetDatabaseSuccess = createAction('[Player Faction API] Reset Database Success');

export const resetDatabaseFailure = createAction(
    '[Player Faction API] Reset Database Failure',
    props<{ error: string }>()
);
