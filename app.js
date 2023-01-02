import express from 'express';
import infoCursos from "./datos/cursos.js";
import routerProgramacion from "./routers/programacion.routes.js";
import routerMatematicas from "./routers/metematicas.routes.js";


const app = express();


app.use('/api/cursos/programacion', routerProgramacion)
app.use('/api/cursos/matematicas', routerMatematicas);


app.get('/', (req, res) => res.end('Mi first server'));

app.get('/api/cursos', (req, res) => {
  res.send(JSON.stringify(infoCursos));
});


// process.env.PORT if host define a port
const PORT = process.env.PORT || 3000;
app.listen(PORT)
console.log(`Server listening on port ${PORT}`);