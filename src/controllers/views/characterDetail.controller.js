import { getCharacteDetails } from '../../api';

const CharacterDetailController = async (id) => {
  const Div = document.createElement('div');

  const character = await getCharacteDetails(id);

  Div.innerHTML = `
    <div class="flex flex-col items-center p-5 md:py-10">
      <figure class="w-4/5 max-w-xs sm:max-w-none sm:w-80 md:w-96 rounded-xl overflow-hidden">
        <img src="${character.image}" class="w-full h-full object-cover" alt="${character.name}" ></img>
      </figure>
      <div class="flex flex-col items-center text-center text-lg sm:text-xl md:text-2xl my-3">
        <h3 class="font-bold text-2xl sm:text-3xl md:text-4xl my-3 lg:my-5">${character.name}</h3>
        <div class="flex items-center mb-2">
          <div class="${character.status === 'Dead' ? 'bg-red-600' : 'bg-green-400'} rounded-full w-2 h-2 mr-2"></div>
          <span class="font-semibold">${character.status}${' - '}${character.species}${' - '}${character.gender}</span>
        </div>
        <p class="mb-2">
          <span class="font-bold">Origin:</span>
          <br/>
          <span  class="ml-2">${character.origin.name}</span>
        </p>
        <p class="mb-2">
          <span class="font-bold">Location:</span>
          <br/>
          <span  class="ml-2">${character.location.name}</span>
        </p>
        <p>Episodes: ${character.episode.length}</p>
      </div>
    </div>
  `;

  return Div;
};

export default CharacterDetailController;
