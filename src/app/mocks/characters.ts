import {CharacterType} from '../character/character-type';
import {Character} from '../character/character';

export const CHARACTER_TYPES: CharacterType[] = [
  {
    id: 2,
    name: 'Good'
  },
  {
    id: 3,
    name: 'Evil'
  },
  {
    id: 2,
    name: 'Neutral'
  }
];

export const CHARACTERS: Character[] = [
  {
    id: 1,
    name: 'Jay',
    type: CHARACTER_TYPES[0],
    season: 1,
    favorite: true
  },
  {
    id: 2,
    name: 'Vanghelis',
    type: CHARACTER_TYPES[1],
    season: 13,
    favorite: false
  },
  {
    id: 3,
    name: 'Overlord',
    type: CHARACTER_TYPES[1],
    season: 2,
    favorite: false
  },
  {
    id: 4,
    name: 'Aspheera',
    type: CHARACTER_TYPES[1],
    season: 11,
    favorite: false
  },
  {
    id: 5,
    name: 'Kay',
    type: CHARACTER_TYPES[0],
    season: 1,
    favorite: true
  }
];
