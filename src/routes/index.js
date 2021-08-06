
import { HomeController, CharacterDetailController, SearchCharacter } from '../controllers/views';
import { NotFound } from '../views';

import Header from '../templates/header.html';

import { isCharacterDetail, getCharacterID } from '../utils';

const router = async (route) => {
  const content = null || document.getElementById('content');

  content.innerHTML = '';

  switch (route) {
    case '':
      content.appendChild(await HomeController());
      break;
    case isCharacterDetail(route): {
      const id = getCharacterID(route);
      content.appendChild(await CharacterDetailController(id));
      break;
    }
    case '#/search':
      content.appendChild(await SearchCharacter());
      break;
    default:
      content.innerHTML = NotFound;
  }
};

export const printHeader = async () => {
  const header = null || document.getElementById('header');

  header.innerHTML = Header;
};

export default router;
