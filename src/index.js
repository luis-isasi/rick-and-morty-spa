import router, { printHeader } from './routes';

router(window.location.hash);

window.addEventListener('load', printHeader);
window.addEventListener('hashchange', () => {
  router(window.location.hash);
});
