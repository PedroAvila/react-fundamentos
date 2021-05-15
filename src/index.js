import React from 'react'
import reactDom from 'react-dom';
import ReactDOM from 'react-dom'

const name = "React"

class TarjetaFruta extends React.Component {
  constructor(){
    super()
    this.state = {
      cantidad: 50
    }
  }

  render(){
    return(
      <div>
        <h3> {this.props.name} </h3>
        <hr />
        <div>Cantidad: { this.state.cantidad } </div>
        <button 
          onClick={ ()=>{
             this.setState({ cantidad: this.state.cantidad + 1 }); 
             } }>Agregar</button>
        <p> $ {this.props.price} </p>
      </div>
    )
  }
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
    <TarjetaFruta name = "Sandia" price = { 5.00 } />
    <TarjetaFruta name = "Naranja" price = { 1.50 } />
    <TarjetaFruta name = "Kiwi" price = { 3.30 } />
  </div>
)

reactDom.render(<App />, document.getElementById("root"));
