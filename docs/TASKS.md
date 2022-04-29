# Ejercicio propuesto

> Una web para reservas de viajes espaciales (Astro Bookings)

## 0. Estructura y configuración de la aplicación

- [ ] Mostrar un listado de las agencias de viajes colaboradoras
- [ ] Mostrar un listado de los viajes disponibles

## 1. Componentes para presentación de información

- [ ] Mostrar un mensaje mientras se está cargando la información
- [ ] Mostrar un mensaje de error cuando no puede cargar la información
- [ ] Mostrar un mensaje de advertencia cuando no hay datos disponibles
- [ ] Mostrar los datos en modo lista
- [ ] Transformar los enumerados en iconos

## 2. Rutas, datos y control de accesos

- [ ] Una página para la gestión de agencias espaciales
- [ ] Resolver los datos antes de entrar en la página
- [ ] Una página para el alta de una nueva agencia
- [ ] Proteger la entrada a la página de usuarios no autorizados
- [ ] Redirigir a los no autenticados a la página de login
- [ ] Redirigir tras el login a la página de inicio
- [ ] Proteger la salida para datos no guardados

## 3. Inyección de dependencias

- [ ] Caché de llamadas HTTP (filter, tap)
- [ ] Gestión de estado de las comunicaciones HTTP (para usar más adelante con un store)
- [ ] Control de errores de las comunicaciones HTTP (retryWhen, catchError, mergeMap)
- [ ] Obtener lista de viajes de la agencia activa (switchMap vs mergeMap)
- [ ] Obtener total de plazas ofertadas por todas las agencias (forkJoin)
- [ ] Un buscador de vuelos (fromEvent, debounceTime, distinctUntilChanged)
- [ ] Compartir resultados asíncronos (share, shareReplay)

## 4. Redux

- [ ] Un Store reactivo para el control de autorización del usuario
- [ ] Un Store reactivo con acciones y consultas al estado de llamadas HTTP
- [ ] Un Store con ngRx para el estado de las reservas

## 5. Probar la lógica

- [ ] Probar servicios de lógica pura
- [ ] Probar el uso de servicios API
- [ ] Probar interceptores y stores

## 6. Probar la presentación

- [ ] Probar componentes controladores
- [ ] Probar componentes presentadores
- [ ] Probar funcionalidad de la aplicación
