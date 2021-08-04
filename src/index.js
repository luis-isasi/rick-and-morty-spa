import router, { printPage } from './routes';

router(window.location.hash);

window.addEventListener('load', printPage);
window.addEventListener('hashchange', () => {
  router(window.location.hash);
});
