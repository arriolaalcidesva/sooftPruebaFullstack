# sooftPruebaFullstack
Test MERN

# Instrucciones para ejecutar el proyecto

### `Instalaciones`
- Instalar [Node](https://nodejs.org/es/)
- Instalar un servicio de MongoDB, ejemplo [Mongo Compass](https://www.mongodb.com/products/compass)

### `Backend`
**Observaciones técnicas:**
- Al objeto feriado se agregó los atributos anio y dateImported con el fin de mejorar el control de las cargas
- Se utilizó la librería Mongoose para trabajar con la colección 'feriados'
- Con el fin de no duplicar elementos al insertar, se aprovecha el metodo de Moongose: findOneAndUpdate()
- Se utiliza variables de entorno para facilitar el uso de valores en los ambientes
- En el archivo .env, utilizar un puerto distinto a 3000

**Pasos para ejecutar:**
- Abrir una terminal (GitBash, PowerShell, etc).
- Clonar el proyecto
- Ubicarse en /sooftPruebaFullstack/Backend
- Ejecutar: npm install
- Ejecutar: npm initial-load
- Se vería:
```js
Recorriendo feriados...
Successfully conected to the DATABASE.
Carnaval => succesfully saved.
Día Nacional de la Memoria por la Verdad y la Justicia => succesfully saved.
Día del Veterano y de los Caídos en la Guerra de Malvinas => succesfully saved.
Viernes Santo Festividad Cristiana => succesfully saved.
Día del Trabajador => succesfully saved.
Carnaval => succesfully saved.
Año Nuevo => succesfully saved.
Feriado Puente Turístico => succesfully saved.
Paso a la Inmortalidad del Gral. Don Martín Güemes => succesfully saved.
Paso a la Inmortalidad del General Manuel Belgrano => succesfully saved.
Día de la Independencia => succesfully saved.
Paso a la Inmortalidad del General José de San Martín => succesfully saved.
Feriado Puente Turístico => succesfully saved.
Día del Respeto a la Diversidad Cultural => succesfully saved.
Día de la Soberanía Nacional => succesfully saved.
Inmaculada Concepción de María => succesfully saved.
Navidad => succesfully saved.
Día de la Revolución de Mayo => succesfully saved.
Feriado Puente Turístico => succesfully saved.
```
- Cerrar proceso: [Ctrl]+[C]
- Ejecutar: npm start
- Se verá un mensaje:
```js
Service listened at 3004
Successfully conected to the DATABASE.
```

### `Frontend`
**Observaciones técnicas:**
- Se utiliza la librería bootstrap para el estilo
- Se utiliza la ventana modal para mostrar el detalle de feriados 
- Se utiliza variables de entorno para facilitar el uso de valores en los ambientes

**Pasos para ejecutar:**
- Levantar primero el servicio backend
- Abrir una segunda terminal (GitBash, PowerShell, etc).
- Ubicarse en /sooftPruebaFullstack/frontend/frontreact
- Ejecutar: npm install
- Ejecutar: npm start
- La ventana se vería:
<img src="https://github.com/arriolaalcidesva/sooftPruebaFullstack/blob/main/frontend/frontreact/public/Listado_feriados.png" width="400px" align="left" />

