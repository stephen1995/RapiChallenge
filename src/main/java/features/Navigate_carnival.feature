Feature: Navigate in Carnival page

@SmokeTest
Scenario: Nuevo usuario
Given el usuario visita el landing de Carnival
And hace click en Create Account
When ingresa su Correo, Contraseña y da click en SignUp
And  ingresa la informacion del modal Complete Your Profile
Then el usuario puede observar un modal con las palabras "THANKS FOR SIGNING UP!"

@SmokeTest
Scenario: Buscar cruceros a Bahamas con duracion de seis a nueve dias y guardar busqueda
Given el usuario visita el landing de Carnival
And hace click en Sail To y selecciona Bahamas
And hace click en Duration y seleciona de seis a nueve dias
When hace click en Search Cruises y es redirigido a la pagina "/cruise-search"
And el usuario selecciona la primera opcion y es redirigido a "/itinerary"
Then hace click en guardar


@SmokeTest1
Scenario: Continuar desde mi busqueda guardada y realizar cambios
Given el usuario visita el landing de Carnival
And se loguea con sus crendenciales
And hace click en el link saved y es redirigido a la pagina "/saved"
And selecciona el itinerario guardado
When hace click en Search Cruises y es redirigido a la pagina "/cruise-search"
And el usuario selecciona la primera opcion y es redirigido a "/itinerary"
Then hace click en guardar








 



