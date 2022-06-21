import { createAction, props } from "@ngrx/store";
import { StructureBonusType } from "../../enums/structure-bonus-type.enum";

export const getStructureBonus = createAction('[Structure Bonus Page] Load');

export const updateStructureBonus = createAction(
  '[Structure Bonus Page] Update',
  props<{ structureBonusType: StructureBonusType }>()
);
