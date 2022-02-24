import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PlayerFactionType } from '../enums/player-faction-type.enum';
import { PlayerFactionInterface } from '../interfaces/player-faction.interface';

export class PlayerFactionData implements InMemoryDbService {
    createDb() {
        const playerFactions: PlayerFactionInterface[] = [
            {
                id: 1,
                playerFactionType: PlayerFactionType.Crimea,
                popularity: 12,
                victoryStars: 5,
                territories: 12,
                resources: 7,
                money: 15,
                structureBonuses: 6 
            },
            {
                id: 2,
                playerFactionType: PlayerFactionType.Rusviet,
                popularity: 12,
                victoryStars: 5,
                territories: 12,
                resources: 7,
                money: 15,
                structureBonuses: 6 
            },
            {
                id: 3,
                playerFactionType: PlayerFactionType.Nordic,
                popularity: 12,
                victoryStars: 5,
                territories: 12,
                resources: 7,
                money: 15,
                structureBonuses: 6 
            },
            {
                id: 4,
                playerFactionType: PlayerFactionType.Polania,
                popularity: 12,
                victoryStars: 5,
                territories: 12,
                resources: 7,
                money: 15,
                structureBonuses: 6 
            },
            {
                id: 5,
                playerFactionType: PlayerFactionType.Saxony,
                popularity: 12,
                victoryStars: 5,
                territories: 12,
                resources: 7,
                money: 15,
                structureBonuses: 6 
            },
            {
                id: 6,
                playerFactionType: PlayerFactionType.Togawa,
                popularity: 12,
                victoryStars: 5,
                territories: 12,
                resources: 7,
                money: 15,
                structureBonuses: 6 
            },
            {
                id: 7,
                playerFactionType: PlayerFactionType.Albion,
                popularity: 12,
                victoryStars: 5,
                territories: 12,
                resources: 7,
                money: 15,
                structureBonuses: 6 
            },
        ];
        return { playerFactions };
    }
}