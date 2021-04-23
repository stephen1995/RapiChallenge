Feature: Navegar en la pagina de Carnival
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


	@SmokeTest
	Scenario: Continuar desde mi busqueda guardada y realizar cambios
			Given el usuario visita el landing de Carnival		
			And hace click en el link saved y es redirigido a la pagina "/saved"
			And selecciona el itinerario guardado y es redirigido a la pagina "/itinerary"
			And el usuario hace click en Review Trip y es redirigido a la pagina "/booking"
			And hace click en continuar
			When hace click en el link Change para modificar la cantidad de asientos
			And aumenta a cuatro el numero de huespedes
			And hace click en continuar
			And selecciona Mexico como su pais de residencia
			And selecciona la opcion, Mostrar tarifas para VIFP Club
			And hace click en continuar
			And selecciona la habitacion mas barata
			And selecciona el interior incluido en el precio
			And selecciona continuar para la opcion Let me choose my room
			And hace click en mas opciones
			And selecciona la opcion April Savings Sale
			And selecciona su cuarto
			And hace click en continuar
			Then hace click en continuar en booking y es llevado a la pagina de "/payment"
			
			
			
			
			
			








 



