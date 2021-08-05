
import Home from '../controllers/views/home.controller';
import NotFound from '../views/NotFound.html';
import About from '../views/About.html';
import Header from '../templates/header.html';

import { isCharacterDetail, getCharacterID } from '../utils';

const router = async (route) => {
  const content = null || document.getElementById('content');

  content.innerHTML = '';

  switch (route) {
    case '':
      content.appendChild(await Home());
      break;
    case isCharacterDetail(route): {
      const characterId = getCharacterID(route);
      // content.appendChild( )
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
