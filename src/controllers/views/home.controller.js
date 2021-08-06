import homeView from '../../views/Home.html';
import characterController from '../templates/character.controller';
import { getCharacters } from '../../api';

const HomeController = async () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = homeView;

  const container = divElement.querySelector('#containerCharacters');

  // get all characters
  const characters = await getCharacters();

  // adding all characters within container
  characters.results.forEach(character => {
    container.appendChild(characterController(character));
  });

  return divElement;
};

export default HomeController;
