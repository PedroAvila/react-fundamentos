import React from 'react'
import reactDom from 'react-dom';
import ReactDOM from 'react-dom'

const name = "React"

class TarjetaFruta extends React.Component {
  constructor(){
    super()

    // this.agregar = this.agregar.bind(this);
    // this.quitar = this.quitar.bind(this);

    const METHODS = [
      "agregar",
      "quitar",
      "limpiar"
    ]

    METHODS.forEach((method)=>{
      this[method] = this[method].bind(this)
    })

    this.state = {
      cantidad: 0
    }
  }

  agregar(){
    this.setState({ cantidad: this.state.cantidad + 1 });
  }

  quitar(){
    this.setState({ cantidad: this.state.cantidad - 1 });
  }

  limpiar(){
    this.setState({ cantidad: 0 });
  }

  render(){
    return(
      <div>
        <h3> {this.props.name} </h3>
        <div>Cantidad: { this.state.cantidad }</div>
        <button onClick={ this.agregar }> + </button>
        <button onClick={ this.quitar }> - </button>
        <button onClick={ this.limpiar }> Limpiar </button>
        <hr />
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
