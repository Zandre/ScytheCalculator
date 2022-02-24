import { createAction, props } from "@ngrx/store";
import { PlayerFactionInterface } from "../../interfaces/player-faction.interface";

export const loadSuccess = createAction(
    '[Player Faction API] Load Success',
    props<{ playerFactions: PlayerFactionInterface[] }>()
);

export const loadFailure = createAction(
    '[Player Faction API] Load Failure',
    props<{ error: string }>()
);

export const updateSuccess = createAction(
    '[Player Faction API] Update Success',
    props<{ playerFaction: PlayerFactionInterface }>()
);

export const updateFailure = createAction(
    '[Player Faction API] Update Failure',
    props<{ error: string }>()
);

export const createSuccess = createAction(
    '[Player Faction API] Create Success',
    props<{ playerFaction: PlayerFactionInterface }>()
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
