import { createAction, props } from "@ngrx/store";
import { StructureBonusType } from "../../enums/structure-bonus-type.enum";
import { StructureBonus } from "../../interfaces/structure-bonus.interface";

export const loadSuccess = createAction(
  '[Structure Bonus API] Load Success',
  props<{ structureBonus: StructureBonus }>()
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
