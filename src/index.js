import router, { printPage } from './routes';

window.addEventListener('load', printPage);
window.addEventListener('hashchange', () => {
  router(window.location.hash);
});
