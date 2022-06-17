import { prop, required } from "@rxweb/reactive-form-validators";
import { StructureBonusType } from "../../enums/structure-bonus-type.enum";
import { StructureBonus } from "../../interfaces/structure-bonus.interface";
import { StructureBonusMetaDataModel } from "../../models/structure-bonus-metadata.model";

export class StructureBonusModel implements StructureBonus {

  @prop()
  @required()
  structureBonusType: StructureBonusType;

  metaData: StructureBonusMetaDataModel;

  static createEmpty(): StructureBonusModel {
    const model = new StructureBonusModel();
    return model;
  }

  static createFromType(type: StructureBonusType): StructureBonusModel {
    const model = new StructureBonusModel();
    model.structureBonusType = type;
    model.metaData = StructureBonusMetaDataModel.createFromType(type);
    return model;
  }

  public setMetaData(): void {
    this.metaData = StructureBonusMetaDataModel.createFromType(this.structureBonusType);
  }
}
