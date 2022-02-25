import { maxNumber, prop, required } from "@rxweb/reactive-forms";
import { PlayerFactionType } from "../../enums/player-faction-type.enum";
import { PlayerFaction } from "../../interfaces/player-faction.interface";

export class PlayerFactionModel implements PlayerFaction {
    
    @prop()
    id: number;

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
    structureBonuses: number;

    static createFromInput(input: PlayerFaction): PlayerFactionModel {
        const model = new PlayerFactionModel();

        model.id = input.id;
        model.playerFactionType = input.playerFactionType;
        model.popularity = input.popularity;
        model.victoryStars = input.victoryStars;
        model.territories = input.territories;
        model.resources = input.resources;
        model.money = input.money;
        model.structureBonuses = input.structureBonuses;
        
        return model;
    }

    static createEmpty(): PlayerFactionModel {
        return new PlayerFactionModel();
    }

}