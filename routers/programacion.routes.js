import express from 'express';
import infoCursos from "../datos/cursos.js";

const routerProgramacion = express.Router();

routerProgramacion.get('/', (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion));
});

routerProgramacion.get('/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }
  res.send(JSON.stringify(resultados));
});

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;

  const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

  if (resultados === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
  }
  res.send(JSON.stringify(resultados))
});

export default routerProgramacion