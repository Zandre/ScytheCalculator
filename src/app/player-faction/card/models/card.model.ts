import { PlayerFactionType } from "../../enums/player-faction-type.enum";
import { PlayerFactionInterface } from "../../interfaces/player-faction.interface";

export class CardModel implements PlayerFactionInterface {
    
    // interface properties
    id: number;
    playerFactionType: PlayerFactionType;
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

    static create(input: PlayerFactionInterface): CardModel {
        const model = new CardModel();

        model.id = input.id;
        model.playerFactionType = input.playerFactionType;
        model.popularity = input.popularity;
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
                model.factionCharacters = "Akiko & Jirp";
                model.imageName = "togawa";
                break;                                        
        }

        return model;
    }

}