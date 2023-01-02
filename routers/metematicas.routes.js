import { Router } from 'express';
import infoCursos from "../datos/cursos.js";


const routerMatematicas = Router();

routerMatematicas.get('/', (req, res) => {
  res.send(JSON.stringify(infoCursos.matematicas));
});

routerMatematicas.get('/:tema', (req, res) => {
  const tema = req.params.tema;
  const resultados = infoCursos.matematicas.filter(curso => curso.tema == tema);

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontro el tema de ${tema}`)
  }
  res.send(JSON.stringify(resultados))
});

export default routerMatematicas