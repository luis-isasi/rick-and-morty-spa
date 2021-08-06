
import { HomeController, CharacterDetailController, SearchCharacter } from '../controllers/views';
import { NotFound } from '../views';

import Header from '../templates/header.html';

import { validateRouteCharacterDetail, getCharacterID, validateRoutehome, getHomePageID } from '../utils';

const router = async (route) => {
  const content = null || document.getElementById('root');

  content.innerHTML = '';

  switch (route) {
    case '':
      window.location.href = '/#/1';
      break;
    case validateRoutehome(route): {
      const id = getHomePageID(route);
      content.appendChild(await HomeController(id));
      break;
    }
    case validateRouteCharacterDetail(route): {
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
