import { InMemoryDbService } from 'angular-in-memory-web-api';
import { StructureBonusType } from 'src/app/structure-bonusses/enums/structure-bonus-type.enum';
import { PlayerFaction } from '../../player-faction/interfaces/player-faction.interface';

export class ScytheData implements InMemoryDbService {
    createDb() {
        const playerFactions: PlayerFaction[] = [];
        const bonusStructureType: StructureBonusType = 0;
        return { playerFactions, bonusStructureType };
    }
}
