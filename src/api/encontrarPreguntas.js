export function api(api) {
  return fetch(api)
    .then((response) => response.json())
    .then((datosApi) => {
      return datosApi;
    });
}
