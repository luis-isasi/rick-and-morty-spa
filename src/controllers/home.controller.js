import homeView from '../views/Home.html';

const addCharacters = async () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = homeView;

  const container = divElement.querySelector('#containerCharacters');

  const response = await window.fetch('https://rickandmortyapi.com/api/character');
  const characters = await response.json();

  console.log({ characters });

  characters.results.forEach(character => {
    container.innerHTML += `
    <div>${character.name}</div>
    `;
  });

  return divElement;
};

export default addCharacters;
