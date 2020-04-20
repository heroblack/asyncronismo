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
