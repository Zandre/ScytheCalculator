import { PlayerFactionType } from "../enums/player-faction-type.enum";
import { PlayerFaction } from "../interfaces/player-faction.interface";

export class PlayerFactionModel implements PlayerFaction {
    
    // interface properties
    id: number;
    playerFactionType: number;
    popularity: number;
    victoryStars: number;
    territories: number;
    resources: number;
    money: number;
    structureBonuses: number;

    // front-end concerns
    factionName: string;
    factionCharacters: string;
    imageName: string;
    popularityPercentage: number;
    victoryStarMoney: number;
    territoryMoney: number;
    resourceMoney: number;
    TOTAL: number;

    static create(input: PlayerFaction): PlayerFactionModel {
        const model = new PlayerFactionModel();

        model.id = input.id;
        model.playerFactionType = input.playerFactionType;
        model.popularity = input.popularity;
        model.popularityPercentage = (model.popularity/18)*100;
        model.victoryStars = input.victoryStars;
        model.territories = input.territories;
        model.resources = input.resources;
        model.money = input.money;
        model.structureBonuses = input.structureBonuses;

        switch(input.playerFactionType){
            case PlayerFactionType.Albion:
                model.factionName = "Clan Albion";
                model.factionCharacters = "Connor & Max";
                model.imageName = "albion";
                break;
            case PlayerFactionType.Polania:
                model.factionName = "Polania Republic";
                model.factionCharacters = "Anna & Wojtek";
                model.imageName = "polania";
                break;
            case PlayerFactionType.Saxony:
                model.factionName = "Saxony Empire";
                model.factionCharacters = "Gunter von Duitsburg with Nacht & Tag";
                model.imageName = "saxony";
                break;  
            case PlayerFactionType.Crimea:
                model.factionName = "Crimean Khanate";
                model.factionCharacters = "Zehra & Kar";
                model.imageName = "crimea";
                break;  
            case PlayerFactionType.Nordic:
                model.factionName = "Nordic Kingdom";
                model.factionCharacters = "Bjorn & Mox";
                model.imageName = "nordic";
                break;  
            case PlayerFactionType.Rusviet:
                model.factionName = "Rusviet Union";
                model.factionCharacters = "Olga Romanova & Changa";
                model.imageName = "rusviet";
                break;  
            case PlayerFactionType.Togawa:
                model.factionName = "Togawa Shogunate";
                model.factionCharacters = "Akiko & Jiro";
                model.imageName = "togawa";
                break;                                        
        }

        model.victoryStarMoney = this.getVictoryStarMoney(model.victoryStars, model.popularity);
        model.territoryMoney = this.getTerritoryMoney(model.territories, model.popularity);
        model.resourceMoney = this.getResourceSMoney(model.resources, model.popularity);

        model.TOTAL = model.victoryStarMoney + model.territoryMoney + model.resourceMoney + model.money + model.structureBonuses;

        return model;
    }

    static getVictoryStarMoney(victoryStars: number, popularity: number): number {
        if(popularity > 12){
            return victoryStars * 5;
        }

        if(popularity > 6){
            return victoryStars * 4;
        }

        return victoryStars * 3
    }

    static getTerritoryMoney(territories: number, popularity: number): number {
        if(popularity > 12){
            return territories * 4;
        }

        if(popularity > 6){
            return territories * 3;
        }

        return territories * 2
    }

    static getResourceSMoney(resources: number, popularity: number): number {

        resources = Math.floor(resources/2);

        if(popularity > 12){
            return resources * 3;
        }

        if(popularity > 6){
            return resources * 2;
        }

        return resources * 1
    }

}