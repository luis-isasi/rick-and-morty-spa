
import Home from '../views/Home.html';
import NotFound from '../views/NotFound.html';
import About from '../views/About.html';

import Header from '../templates/header/index.html';

const router = async (route) => {
  const content = null || document.getElementById('content');

  content.innerHTML = '';

  switch (route) {
    case '':
      content.innerHTML = Home;
      break;
    case '#/about':
      content.innerHTML = About;
      break;
    default:
      content.innerHTML = NotFound;
  }
};

export const printPage = async () => {
  const header = null || document.getElementById('header');

  header.innerHTML = Header;
};

export default router;
