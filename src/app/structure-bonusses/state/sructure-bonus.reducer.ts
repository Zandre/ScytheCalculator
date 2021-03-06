import { createReducer, on } from "@ngrx/store";
import { StructureBonusType } from "../enums/structure-bonus-type.enum"
import { StructureBonusApiActions } from "./actions";

export interface StructureBonusState {
  structureBonusType: StructureBonusType,
  error: string
}

const initialState: StructureBonusState = {
  structureBonusType: 0,
  error: ''
}

export const structureBonusReducer = createReducer<StructureBonusState>(
  initialState,
  on(StructureBonusApiActions.loadSuccess, (state, action): StructureBonusState => {
    return {
        ...state,
        structureBonusType: action.structureBonus.structureBonusType,
        error: ''
    };
  }),
  on(StructureBonusApiActions.loadFailure, (state, action): StructureBonusState => {
    return {
        ...state,
        error: action.error
    };
  }),
  on(StructureBonusApiActions.updateSuccess, (state, action): StructureBonusState => {
    return {
      ...state,
      structureBonusType: action.structureBonusType,
      error: ''
    };
  }),
  on(StructureBonusApiActions.updateFailure, (state, action): StructureBonusState => {
    return {
      ...state,
      error: action.error
    };
  })
)
