import homeView from '../../views/Home.html';
import characterController from '../templates/character.controller';
import { getCharacters } from '../../api';

const divElement = document.createElement('div');
divElement.innerHTML = homeView;

const containerCharacters = divElement.querySelector('#containerCharacters');
const containerPagination = divElement.querySelector('#containerPagination');

const HomeController = async (page = 1) => {
  const _page = parseInt(page);

  // get all characters
  const data = await getCharacters(page);

  const bgAndHover = 'bg-gray-100 hover:bg-gray-200 transition-colors duration-150 ease-in-out';
  containerPagination.innerHTML = `
    <a href="#/${_page - 2}" ${_page <= 1 ? 'style="pointer-events: none"' : ''} class="${bgAndHover} border border-gray-400 font-semibold rounded-md mx-1 px-1 text-indigo-700 "> << </a>
    <a href="#/${_page - 1}" ${_page <= 1 ? 'style="pointer-events: none"' : ''} class="${bgAndHover} border border-gray-400 font-bold rounded-md mx-1 px-1 text-indigo-700"> < </a>
    <span class="border border-gray-400 rounded-md mx-1 px-2 text-indigo-700">${_page}</span>
    <a href="#/${_page + 1}" ${_page < data.info.pages ? '' : 'style="pointer-events: none"'} class="${bgAndHover} border border-gray-400 font-bold rounded-md mx-1 px-1 text-indigo-700"> > </a>
    <a href="#/${_page + 2}" ${_page < data.info.pages ? '' : 'style="pointer-events: none"'} class="${bgAndHover} border border-gray-400 font-bold rounded-md mx-1 px-1 text-indigo-700"> >> </a>
  `;

  console.log({ data });

  containerCharacters.innerHTML = '';
  // adding all characters within container
  data.results.forEach(character => {
    containerCharacters.appendChild(characterController(character));
  });

  return divElement;
};

export default HomeController;
