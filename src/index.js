import React from 'react'
import reactDom from 'react-dom';
import ReactDOM from 'react-dom'

const name = "React"

/* Los componentes siempre tienen que comenzar con mayúscula
Y deben retornar un nodo */
const TarjetaFruta = () => (
  //return <div>Hey!</div>
  <div>
      <h3>Titulo</h3>
      <hr />
      <p>Descripción ....</p>
    </div>
)

const App = () => (
  <div>
    <TarjetaFruta />
    <TarjetaFruta></TarjetaFruta>
  </div>
)

reactDom.render(<App />, document.getElementById("root"));
