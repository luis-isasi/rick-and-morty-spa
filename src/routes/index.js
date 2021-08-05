
import { HomeController, CharacterDetailController } from '../controllers/views';
import { About, NotFound } from '../views';

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
    case '#/about':
      content.innerHTML = About;
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
