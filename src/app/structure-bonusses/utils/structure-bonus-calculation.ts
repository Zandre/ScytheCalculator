import { StructureBonusType } from "../enums/structure-bonus-type.enum";

export function StructureBonusCalculation (territories: number, type: StructureBonusType) {

  switch (type) {
    case StructureBonusType.AdjacentToTunnels:
      return AdjacentToTunnels(territories, type);
    case StructureBonusType.AdjacentToLakes:
      return AdjacentToLakes(territories);
    case StructureBonusType.AdjacentToEncounters:
      return AdjacentToEncounters(territories);
    case StructureBonusType.NumberOfTunnels:
      return NumberOfTunnels(territories, type);
    case StructureBonusType.NumbersOfStructuresInARow:
      return NumberOfStructuresInARow(territories, type);
    case StructureBonusType.NumberOfFarmsOrTundra:
      return NumberOfFarmsOrTundras(territories, type);
    default:
      throw new Error(`Enum not catered for in StructureBonusCalculation() ${type}`);
  }
}

function AdjacentToTunnels(territories: number, type: StructureBonusType): number {
  if(territories === 1) {
    return 2;
  } else if (territories === 2 || territories === 3) {
    return 4;
  } else if (territories === 4 || territories === 5) {
    return 6;
  } else if (territories === 6) {
    return 9;
  } else if (territories > 6) {
    throw new Error(`Invalid AdjacentToTunnels() ${territories}:${type}`)
  }
  return 0;
}

function AdjacentToLakes(territories: number): number {
  if(territories === 1) {
    return 2;
  } else if (territories === 2 || territories === 3) {
    return 4;
  } else if (territories === 4 || territories === 5) {
    return 6;
  } else if (territories === 6 || territories === 7) {
    return 9;
  }
  return 0;
}

function AdjacentToEncounters(territories: number): number {
  if(territories === 1) {
    return 2;
  } else if (territories === 2 || territories === 3) {
    return 4;
  } else if (territories === 4 || territories === 5) {
    return 6;
  } else if (territories === 6 || territories === 7) {
    return 9;
  }
  return 0;
}

function NumberOfTunnels(territories: number, type: StructureBonusType): number {
  if(territories === 1) {
    return 2;
  } else if (territories === 2) {
    return 4;
  } else if (territories === 3 || territories === 4) {
    return 6;
  } else if (territories > 4) {
    throw new Error(`Invalid NumberOfTunnels() ${territories}:${type}`)
  }
  return 0;
}

function NumberOfStructuresInARow(territories: number, type: StructureBonusType): number {
  if(territories === 1) {
    return 2;
  } else if (territories === 2) {
    return 4;
  } else if (territories === 3) {
    return 6;
  } else if (territories === 4) {
    return 9;
  } else if (territories > 4) {
    throw new Error(`Invalid NumberOfStructuresInARow() ${territories}:${type}`)
  }
  return 0;
}

function NumberOfFarmsOrTundras(territories: number, type: StructureBonusType): number {
  if(territories === 1) {
    return 2;
  } else if (territories === 2) {
    return 4;
  } else if (territories === 3) {
    return 6;
  } else if (territories === 4) {
    return 9;
  } else if (territories > 4) {
    throw new Error(`Invalid NumberOfFarmsOrTundras() ${territories}:${type}`)
  }
  return 0;
}
