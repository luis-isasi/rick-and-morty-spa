import homeView from '../views/Home.html';
import CharacterController from './character.controller';
import { getCharacters } from '../api';

const addCharacters = async () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = homeView;

  const container = divElement.querySelector('#containerCharacters');

  const characters = await getCharacters();

  characters.results.forEach(character => {
    const divCharacter = CharacterController(character);

    container.appendChild(divCharacter);
  });

  return divElement;
};

export default addCharacters;
