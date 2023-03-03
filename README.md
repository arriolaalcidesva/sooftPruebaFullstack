# sooftPruebaFullstack
Test MERN

# Instrucciones para ejecutar el proyecto

### `Instalaciones`
Instalar [Node](https://nodejs.org/es/)
Instalar un servicio de MongoDB, ejemplo [Mongo Compass](https://www.mongodb.com/products/compass)

### `Backend`
**Observaciones técnicas:**
- Al objeto feriado se agregó los atributos anio y dateImported con el fin de mejorar el control de las cargas
- Se utilizó la librería Mongoose para trabajar con la colección 'feriados'
- Con el fin de no duplicar elementos al insertar, se aprovecha el metodo de Moongose: findOneAndUpdate()
- Se utiliza variables de entorno para facilitar el uso de valores en los ambientes
- En el archivo .env, utilizar un puerto distinto a 3000


**-** Abrir una terminal (GitBash, PowerShell, etc).
**-** Clonar el proyecto
**-** Ubicarse en /sooftPruebaFullstack/Backend
**-** Ejecutar: npm install
**-** Ejecutar: npm initial-load
**-** Cerrar proceso: [Ctrl]+[C]
**-** Ejecutar: npm start
**-** Se verá un mensaje:
```js
Service listened at 3004
Successfully conected to the DATABASE.
```

### `Frontend`
**Observaciones técnicas:**
- Se utiliza la librería bootstrap para la vista 
- Se utiliza variables de entorno para facilitar el uso de valores en los ambientes

**-** Abrir una segunda terminal (GitBash, PowerShell, etc).
**-** Ubicarse en /sooftPruebaFullstack/frontend/frontreact
**-** Ejecutar: npm install
**-** Ejecutar: npm start

