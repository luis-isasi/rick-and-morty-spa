import CharacterHtml from '../templates/character.html';

const Character = (character) => {
  const div = document.createElement('div');
  div.innerHTML = CharacterHtml;

  div.querySelector('#imgCharacter').innerHTML = `
  <img src="${character.image}" ></img>
  `;
  div.querySelector('#name').textContent = character.name;
  div.querySelector('#status').textContent = character.status;
  div.querySelector('#gender').textContent = character.gender;
  div.querySelector('#species').textContent = character.species;

  return div;
};

export default Character;
