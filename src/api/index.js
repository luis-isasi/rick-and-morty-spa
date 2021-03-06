export const getCharacters = async (page = 1) => {
  const response = await window.fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  return await response.json();
};

export const getCharacteDetails = async (id) => {
  const response = await window.fetch(`https://rickandmortyapi.com/api/character/${id}`);
  return await response.json();
};

export const searchCharacters = async (name) => {
  const response = await window.fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
  return await response.json();
};
