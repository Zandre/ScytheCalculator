
import { maxLength, maxNumber, prop, required } from "@rxweb/reactive-form-validators";
import { PlayerFactionType } from "../../enums/player-faction-type.enum";
import { PlayerFaction } from "../../interfaces/player-faction.interface";

export class PlayerFactionModel implements PlayerFaction {

    @prop()
    id: number;

    @prop()
    @required()
    @maxLength({ value: 20 })
    playerName: string;

    @prop()
    @required()
    playerFactionType: PlayerFactionType;

    @prop()
    @required()
    @maxNumber({ value: 18 })
    popularity: number;

    @prop()
    @required()
    @maxNumber({ value: 6 })
    victoryStars: number;

    @prop()
    @required()
    @maxNumber({ value: 30 })
    territories: number;

    @prop()
    @required()
    @maxNumber({ value: 50 })
    resources: number;

    @prop()
    @required()
    @maxNumber({ value: 50 })
    money: number;

    @prop()
    @required()
    @maxNumber({ value: 20 })
    structureBonusTerritories: number;

    static createFromInput(input: PlayerFaction): PlayerFactionModel {
        const model = new PlayerFactionModel();

        model.id = input.id;
        model.playerName = input.playerName;
        model.playerFactionType = input.playerFactionType;
        model.popularity = input.popularity;
        model.victoryStars = input.victoryStars;
        model.territories = input.territories;
        model.resources = input.resources;
        model.money = input.money;
        model.structureBonusTerritories = input.structureBonusTerritories;

        return model;
    }

    static createEmpty(): PlayerFactionModel {
        const model = new PlayerFactionModel();
        model.id = 0;
        return model;
    }

}
