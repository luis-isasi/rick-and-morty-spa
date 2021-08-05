
import Home from '../controllers/views/home.controller';
import NotFound from '../views/NotFound.html';
import About from '../views/About.html';

import Header from '../templates/header.html';

const router = async (route) => {
  const content = null || document.getElementById('content');

  content.innerHTML = '';

  // validamos si es un path que lleva un id de un character
  const isCharacterDetail = () => {
    const rgxCharacterDetail = /#\/character\/[0-9]+/i;
    if (rgxCharacterDetail.test(route)) return route;
    else return false;
  };

  switch (route) {
    case '':
      content.appendChild(await Home());
      break;
    case isCharacterDetail():
      console.log('asfljkasfnkalsnj');
      break;
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
