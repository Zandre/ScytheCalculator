import { PlayerFactionType } from "../enums/player-faction-type.enum";

export interface PlayerFactionInterface {
    id: number | null;
    playerFactionType: PlayerFactionType;
    popularity: number;
    victoryStar: number;
    territories: number;
    resources: number;
    money: number;
    structurebonuses: number;
}