// validamos si es un path que lleva un id de un character
export const validateRouteCharacterDetail = (route) => {
  const rgxCharacterDetail = /#\/character\/[0-9]+/i;
  if (rgxCharacterDetail.test(route)) return route;
  else return false;
};

// get character's id
export const getCharacterID = (route) => route.split('/')[2];

// validamos la ruta para home
export const validateRoutehome = (route) => {
  const rgxCharacterDetail = /#\/[0-9]+/i;
  if (rgxCharacterDetail.test(route)) return route;
  else return false;
};

// get id for pagination at home
export const getHomePageID = (route) => route.split('/')[1];

export const addHtmlCharacterDetails = (div, character) => {
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
};
