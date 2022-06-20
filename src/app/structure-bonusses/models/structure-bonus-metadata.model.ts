import { StructureBonusType } from "../enums/structure-bonus-type.enum";

export class StructureBonusMetaDataModel {
  name: string;
  description: string;
  imageName: string;
  question: string;

  static createFromType(type: StructureBonusType): StructureBonusMetaDataModel {
    const model = new StructureBonusMetaDataModel();
    switch (type) {
      case StructureBonusType.AdjacentToTunnels:
        model.name = 'Adjacent to Tunnel Territories';
        model.description = 'Number of tunnel territories adjacent to your structures. Only count each tunnel once. A Mine does not count as a tunnel for this purpose, and rivers do not break adjacency';
        model.question = 'How many territories do you own adjacent to tunnel territories?';
        model.imageName = '1';
        break;
      case StructureBonusType.AdjacentToLakes:
        model.name = 'Adjacent to Lake Territories';
        model.description = 'Number of lakes adjacent to your structures. Only count each lake once';
        model.question = 'How many territories do you own adjacent to lake territories?';
        model.imageName = '2';
        break;
      case StructureBonusType.AdjacentToEncounters:
        model.name = 'Adjacent to Encounter Tokens';
        model.description = 'Number of encounters adjacent to your structures. Only count each encounter once. These count whether or not the encounter tokens are still there. Rivers do not break adjacency';
        model.question = 'How many territories do you own adjacent to encounter territories?';
        model.imageName = '3';
        break;
      case StructureBonusType.NumberOfTunnels:
        model.name = 'Number of Tunnel Territories';
        model.description = 'Number of tunnel territories with your structures on them. A Mine does not count as a tunnel for this purpose.';
        model.question = 'How many tunnel territories do you own?';
        model.imageName = '4';
        break;
      case StructureBonusType.NumbersOfStructuresInARow:
        model.name = 'Number of structures in a row';
        model.description = 'Number of your structures in a row (any continuous straight line is fine; only count the longest row of structures you have; rivers do no break continuity)';
        model.question = 'How many territories do you have in a continuous straight line?';
        model.imageName = '5';
        break;
      case StructureBonusType.NumberOfFarmsOrTundra:
        model.name = 'Number of Farms or Tundra Territories';
        model.description = 'Number of farms and tundras with your structures on them';
        model.question = 'How many farm/tundra territories do you own?';
        model.imageName = '6';
        break;
    }
    return model;
  }
}
