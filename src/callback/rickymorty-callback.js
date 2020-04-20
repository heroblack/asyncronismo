const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API_BASE = "https://rickandmortyapi.com/api/character/";
function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest(); // Referencia del objeto que necesitamos.
  /* Hacemos un llamado a una url */
  xhttp.open("GET", url_api, true); // El último parámetro hace referencia al asincronismo. Por defecto es true, pero lo ponemos para referencia.
  /* 'Escuchamos' lo que hará la conexión (Referente a los 5 estados que comenta el profesor) */
  xhttp.onreadystatechange = event => {
    if (xhttp.readyState === 4) {
      // Validar si la petición se completó. (Estado 5 pero contamos desde 0 como en un array)
      if (xhttp.status === 200) {
        // Validar el estado en el que se encuentra la petición. (200 = todo bien, 400 = no encontró algo, 500 = error en el servidor)
        /* Regresar el callback (primer valor que pasamos es el error y el segundo es el resultado del llamado a la API) */
        callback(null, JSON.parse(xhttp.responseText)); // Como el resultado viene en formato de texto de JSON, lo tenemos que convertir a un objeto para trabajar con él
      } else {
        /* Definimos y retornamos un error en caso de obtenerlo (buena práctica) */
        const error = new Error("Error " + url_api);
        return callback(error, null);
      }
    }
  };
  xhttp.send(); // Enviamos la petición.
}

fetchData(API_BASE, function(errPersonajes, getPersonajes) {
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
