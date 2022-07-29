Prueba Tecnica Fullstack Edwin Alejandro Albarracin Duarte

Pasos para ejecutar la Aplicación:
1)El proyecto esta dividido en dos partes Frontend y Backend
2)Al descargar la aplicacion abrimos dos terminales (una para ubicarnos al directorio de frontend y la otra para el 
directorio de backend
3)Ejecutamos npm i en las dos terminales para descargar las dependencias
4)*En el diretorio backend se necesitan las credenciales para conectarse a la base de datos de MongoDB.
Yo las tengo en un archivo .env por buenas practicas.
5)Al tener las credenciales podemos ya arrancar el servidor y conectarse a la base de datos
6)Procedemos en el Directorio Backend a ejecutar el comando npm run dev.

//Arrancar el Frontend
7)una vez instaladas las dependencia en el directorio Frontend procedemos a ejecutar el comando 
ng serve --proxy-config proxy.conf.json -o
Este hara la conexion con el backend y arrancara nuestro servidor frontend

//Funciones de la aplicacion
Una vez cargador el servidor nos dirijeromos al enlance de Home en la cual podemos ver sideBar para navegar a algunas rutas
en la parte izquierda y en la parte derecha nos encontramos con una vista dividida por dos columnas
la primera(izquierda) donde se iran mostrando las imagenes de los superheroes que se vayan guardando
y en la parte derecha otra columna en donde podemos observar dos tabs:

El primer tab titulado resultados:
Consta de un input al cual el cual puedes buscar por nombre de superheroe dandole click al icono de lupa
Ejemp: 'Iron man' o 'Hulk' 'captain america' etc.
al cargar la peticion Si el nombre de super heroes se encuentra en la Api de Marvel este aparecera en la parte de abajo
con su informacion en un datatable
y en la parte de abajo aparecera un boton para Guardar ese super Heroe
Nota: 'Si deseas ver el super Heroe guardado debes refrescar la pagina'

Segundo tab titulado Heroes Saved:
aparecera la lista de super heroes guardados con su info ademas puedes eliminar alguno con el boton con signo - en el apartado
de actions

La aplicacion tambien cuenta con Autenticacion de usuarios con la utilizacion de jwt
Además la parte backend esta completa con sus servicios, controladores,rutas etc

*Las rutas no estan protegidas por cuestion de tiempo
