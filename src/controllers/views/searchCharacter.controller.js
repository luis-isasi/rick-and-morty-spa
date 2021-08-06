import { SearchCharacter as SearchCharacterPage } from '../../views';
import characterHtml from '../../templates/character.html';
import CharacterController from '../templates/character.controller';
import { searchCharacters } from '../../api';

const SearchCharacterController = () => {
  const DivPage = document.createElement('div');
  DivPage.innerHTML = SearchCharacterPage;

  const container = DivPage.querySelector('#containerSearchCharacters');
  const DivCharacter = document.createElement('div');
  DivCharacter.innerHTML = characterHtml;

  const input = DivPage.querySelector('#textSearch');
  const btnSearch = DivPage.querySelector('#btnSearch');

  // add onClick for search
  btnSearch.onclick = async (e) => {
    e.preventDefault();
    // clear the container
    container.innerHTML = '';

    // get all character by name
    const characters = await searchCharacters(input.value);

    if (characters.error) {
      // add message if not results
      const DivNotResults = document.createElement('div');
      DivNotResults.innerHTML = `
        <p class="font-semibold text-2xl my-10" >No hubo resultados :c</p>
      `;
      container.appendChild(DivNotResults);
      return;
    }

    // insert templates characters
    characters.results.forEach(character => {
      container.appendChild(CharacterController(character));
    });
  };

  return DivPage;
};

export default SearchCharacterController;
