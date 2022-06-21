import { PlayerFactionType } from "../enums/player-faction-type.enum";

export interface PlayerFaction {
    id: number | null;
    playerName: string,
    playerFactionType: PlayerFactionType;
    popularity: number;
    victoryStars: number;
    territories: number;
    resources: number;
    money: number;
    structureBonusTerritories: number;
}
