import CharacterHtml from '../../templates/character.html';
import { addHtmlCharacterDetails } from '../../utils';

const CharacterController = (character) => {
  const div = document.createElement('div');
  div.innerHTML = CharacterHtml;

  // add href for a character details
  div.addEventListener('click', () => {
    window.location.href = `#/character/${character.id}`;
  });

  addHtmlCharacterDetails(div, character);
  return div;
};

export default CharacterController;
