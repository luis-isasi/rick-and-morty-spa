import homeView from '../../views/Home.html';
import characterController from '../templates/character.controller';
import { getCharacters } from '../../api';
import nextDouble from '../../icons/nextDouble.html';
import next from '../../icons/next.html';

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
    <a href="#/${_page - 2}" ${_page <= 1 ? 'style="pointer-events: none"' : ''} class="${bgAndHover} border transform rotate-180 h-7 w-7 border-gray-400 font-semibold rounded-md mx-1 px-1 text-black flex justify-center items-center">
      <div class="w-10"> ${nextDouble}</div>
    </a>
    <a href="#/${_page - 1}" ${_page <= 1 ? 'style="pointer-events: none"' : ''} class="${bgAndHover} transform rotate-180 h-7 w-7 border border-gray-400 font-bold rounded-md mx-1 px-1 text-black flex justify-center items-center">
      ${next}
    </a>
    <div class="h-7 w-11 text-center border border-gray-400 rounded-md mx-1 px-2">
      <span class="font-bold" >${_page}</span>
    </div>
    <a href="#/${_page + 1}" ${_page < data.info.pages ? '' : 'style="pointer-events: none"'} class="${bgAndHover} h-7 w-7 border border-gray-400 font-bold rounded-md mx-1 px-1 text-black flex justify-center items-center">
      ${next}
    </a>
    <a href="#/${_page + 2}" ${_page < data.info.pages ? '' : 'style="pointer-events: none"'} class="${bgAndHover} h-7 w-7 border border-gray-400 font-bold rounded-md mx-1 px-1 text-black flex justify-center items-center">
      <div class="w-10"> ${nextDouble}</div>
    </a>
  `;

  containerCharacters.innerHTML = '';
  // adding all characters within container
  data.results.forEach(character => {
    containerCharacters.append(characterController(character));
  });

  return divElement;
};

export default HomeController;
