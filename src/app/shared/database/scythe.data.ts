import { InMemoryDbService } from 'angular-in-memory-web-api';
import { StructureBonus } from 'src/app/structure-bonusses/interfaces/structure-bonus.interface';
import { PlayerFaction } from '../../player-faction/interfaces/player-faction.interface';

export class ScytheData implements InMemoryDbService {
    createDb() {
        const playerFactions: PlayerFaction[] = [];
        const structureBonus: StructureBonus[] = [{id: 0, structureBonusType: 0}];
        return { playerFactions, structureBonus };
    }
}
