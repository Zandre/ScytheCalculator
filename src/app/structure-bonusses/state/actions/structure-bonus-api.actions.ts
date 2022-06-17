import { createAction, props } from "@ngrx/store";
import { StructureBonusType } from "../../enums/structure-bonus-type.enum";

export const loadSuccess = createAction(
  '[Structure Bonus API] Load Success',
  props<{ structureBonusType: StructureBonusType }>()
);

export const loadFailure = createAction(
  '[Structure Bonus API] Load Failure',
  props<{ error: string }>()
);

export const updateSuccess = createAction(
  '[Structure Bonus API] Update Success',
  props<{ structureBonusType: StructureBonusType }>()
);

export const updateFailure = createAction(
  '[Structure Bonus API] Update Failure',
  props<{ error: string }>()
);
