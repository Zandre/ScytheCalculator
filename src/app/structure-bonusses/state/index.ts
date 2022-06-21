import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StructureBonusState } from "./sructure-bonus.reducer";

const getStructureBonusFeatureState = createFeatureSelector<StructureBonusState>('structureBonusType');

export const getStructureBonus = createSelector(
  getStructureBonusFeatureState,
  state => state.structureBonusType
)

export const getError = createSelector(
  getStructureBonusFeatureState,
  state => state.error
)
