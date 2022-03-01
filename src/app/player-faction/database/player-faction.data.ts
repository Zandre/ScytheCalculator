import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PlayerFaction } from '../interfaces/player-faction.interface';

export class PlayerFactionData implements InMemoryDbService {
    createDb() {
        const playerFactions: PlayerFaction[] = [];
        return { playerFactions };
    }
}