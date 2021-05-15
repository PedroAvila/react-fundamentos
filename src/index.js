import React from 'react'
import reactDom from 'react-dom';
import ReactDOM from 'react-dom'

const name = "React"

/* Los componentes siempre tienen que comenzar con mayúscula
Y deben retornar un nodo */
const TarjetaFruta = (props) => {
  //return <div>Hey!</div>
  console.log(props);
  return (
    <div>
      <h3> {props.name} </h3>
      <hr />
      <p> $ {props.price} </p>
    </div>
  )
  }

/* let frutaExotica = "Fruta del Dragon";

const App = () => (
  <div>
    <TarjetaFruta name = "Sandia" price = { 2.00 } />
    <TarjetaFruta name = "Naranja" price = { 1.50 } />
    <TarjetaFruta name = { `${ frutaExotica }` } price = { 3.30 } />
  </div>
) */

const App = () => (
  <div>
    <TarjetaFruta name = "Sandia" price = { 2.00 } />
    <TarjetaFruta name = "Naranja" price = { 1.50 } />
    <TarjetaFruta name = "Kiwi" price = { 3.30 } />
  </div>
)

reactDom.render(<App />, document.getElementById("root"));
