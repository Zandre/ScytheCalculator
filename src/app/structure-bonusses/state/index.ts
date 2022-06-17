import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StructureBonusState } from "./sructure-bonus.reducer";

const getStructureBonusState = createFeatureSelector<StructureBonusState>('structureBonus');

export const getStructureBonus = createSelector(
  getStructureBonusState,
    state => state.structureBonusType
)

export const getError = createSelector(
  getStructureBonusState,
    state => state.error
)
