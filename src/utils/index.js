// validamos si es un path que lleva un id de un character
export const isCharacterDetail = (route) => {
  const rgxCharacterDetail = /#\/character\/[0-9]+/i;
  if (rgxCharacterDetail.test(route)) return route;
  else return false;
};

// get character's id
export const getCharacterID = (route) => route.split('/')[2];
