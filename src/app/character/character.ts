import {CharacterType} from './character-type';

export interface Character {
  id: number;
  type: CharacterType;
  name: string;
  season: number;
  favorite: boolean;
}

