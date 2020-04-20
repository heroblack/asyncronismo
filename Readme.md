### Codigos de estado HTTP

```text
Códigos de estado HTTP
Sirven para describir el estado de la petición.

1xx: Esto indica que la petición fue recibida y esta siendo procesada.
2xx: La solicitud fue completada correctamente.
3xx: Indica que hay acciones adicionales que se deben de hacer, por lo general se utilizan en las redirecciones.
4xx: Errores del cliente. Indica que se realiza una solicitud errónea.
5xx: Errores del servidor. Indica que el servidor presenta un error.

Errores más comunes

200: La petición fue correcta.
201: Es el estado cuando la solicitud Post fue correcta.
204: La solicitud fue procesada correctamente pero no devuelve información.
400: Bad request, la solicitud no es correcta.
401: Authorized, indica que se debe de realizar una autenticación antes de realizar una petición.
403: Forbidden: No se tiene acceso al recurso aunque se esté autenticado.
404: Not Found, el recurso no fue encontrado.
500: Internal Server Error, el servidor indica que la solicitud no pudo ser procesada.
```
