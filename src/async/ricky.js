const RestAPI = require("../util/RestAPI");

/**
 * fetchData(API_BASE, function(errPersonajes, getPersonajes) {
  if (errPersonajes) return console.log(errPersonajes);
  let id = getPersonajes.results[0].id;
  fetchData(API_BASE + id, function(errCharacter, getCharacter) {
    if (errCharacter) return console.log(errCharacter);
    fetchData(getCharacter.origin.url, function(errOrigin, getOrigin) {
      if (errOrigin) return console.log(errOrigin);
      console.log(getPersonajes.info.count);
      console.log(getCharacter.name);
      console.log(getOrigin.dimension);
    });
  });
});
 */
/*
apiRick = new RestAPI("https://rickandmortyapi.com/api");
apiRick
  .callApiGet("/character/")
  .then(response => {
    console.log(response.data.info.count);
    return apiRick.callApiGet(`/character/${response.data.results[0].id}`);
  })
  .then(response => {
    console.log(response.data.name);
    return apiRick.callApiGet(`${response.data.origin.url}`);
  })
  .then(response => {
    console.log(response.data.dimension);
  })
  .catch(error => console.log(error.response.data));
*/
apiRick = new RestAPI("https://rickandmortyapi.com/api");
const getData = async () => {
  try {
    const listaPersonajes = await apiRick.callApiGet("/character/");
    const character = await apiRick.callApiGet(
      `/character/${listaPersonajes.data.results[0].id}`
    );
    const origin = await apiRick.callApiGet(`${character.data.origin.url}`);
    console.log(listaPersonajes.data.info.count);
    console.log(character.data.name);
    console.log(origin.data.dimension);
  } catch (error) {
    console.log(error);
  }
};

getData();
