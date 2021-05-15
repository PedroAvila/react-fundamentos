import React from 'react'
//import './TarjetaFruta.css'
import styles from './TarjetaFruta.module.css'
//console.log(styles);

class TarjetaFruta extends React.Component {
    state = {
      cantidad: 0
    }
  
    // LA NATURALEZA DE LOA ARROW FUNCTION ES HEREDAR EL THIS DEL PADRE.
    agregar = () => this.setState({ cantidad: this.state.cantidad + 1 });
  
    quitar = () => this.setState({ cantidad: this.state.cantidad - 1 });
    
  
    limpiar = () => this.setState({ cantidad: 0 });
  
    render(){
        const hasItems = this.state.cantidad > 0;
        //const clases = `styles.card ${ hasItems ? styles['card-active']  : '' }`
        const activeClass = hasItems ? styles['card-active'] : ''
        const clases = styles.card + ' ' + activeClass 

        // TarjetaFruta
        // TarjetaFruta TarjetaFruta-activa

        

      return(
        <div className={ clases }>
          <h3> {this.props.name} </h3>
          <div>Cantidad: { this.state.cantidad }</div>
          <button onClick={ this.agregar }> + </button>
          <button onClick={ this.quitar }> - </button>
          <button onClick={ this.limpiar }> Limpiar </button>
          <hr />
          <p> $ { this.props.price } </p>
          <p>
              Total: $ { this.props.price * this.state.cantidad }
          </p>
        </div>
      )
    }
  }

  export default TarjetaFruta