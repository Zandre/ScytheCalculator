import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PlayerFactionInterface } from '../interfaces/player-faction.interface';

export class PlayerFactionData implements InMemoryDbService {
    createDb() {
        const playerFactions: PlayerFactionInterface[] = [];
        return { playerFactions };
    }
}