export const getCharacters = async () => {
  const response = await window.fetch('https://rickandmortyapi.com/api/character');
  const characters = await response.json();
  return characters;
};
