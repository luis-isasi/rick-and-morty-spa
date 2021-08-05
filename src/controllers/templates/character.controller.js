import CharacterHtml from '../../templates/character.html';

const CharacterController = (character) => {
  const div = document.createElement('div');
  div.innerHTML = CharacterHtml;

  // add href for a character details
  div.addEventListener('click', () => {
    window.location.href = `#/character/${character.id}`;
  });

  // add character's image
  div.querySelector('#imgCharacter').innerHTML = `
  <img src="${character.image}" class="w-full h-full object-cover" alt="${character.name}" ></img>
  `;

  // add character's datails
  div.querySelector('#content').innerHTML = `
    <h4 id="name" class="font-bold text-2xl mb-1">${character.name}</h4>
    <div class="flex items-center mb-1">
      <div class="${character.status === 'Dead' ? 'bg-red-600' : 'bg-green-400'} rounded-full w-2 h-2 mr-2"></div>
      <span class="font-semibold">${character.status}${' - '}${character.species}${' - '}${character.gender}</span>
    </div>
    <p>
      <span class="font-bold">Origin:</span>
      <br/>
      <span  class="ml-2">${character.origin.name}</span>
    </p>
    <p>
      <span class="font-bold">Location:</span>
      <br/>
      <span  class="ml-2">${character.location.name}</span>
    </p>
  `;

  return div;
};

export default CharacterController;
