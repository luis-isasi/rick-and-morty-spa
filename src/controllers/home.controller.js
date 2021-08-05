import homeView from '../views/Home.html';
import CharacterController from './character.controller';

const addCharacters = async () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = homeView;

  const container = divElement.querySelector('#containerCharacters');

  const response = await window.fetch('https://rickandmortyapi.com/api/character');
  const characters = await response.json();

  characters.results.forEach(character => {
    const divCharacter = CharacterController(character);

    container.appendChild(divCharacter);
  });

  return divElement;
};

export default addCharacters;
