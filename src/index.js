import React from 'react'
import reactDom from 'react-dom';
import ReactDOM from 'react-dom'

const name = "Gerardo Gallegos"

const user1 = {
  name: "Gerardo Gallegos",
  age: 28,
  country: "México"
}

function getInfo(user){
  return 'Hola mi nombre es ${ user.name } y soy originario de México'
}

// const app = <h1>Tengo { user1.age } años y el doble de mi edad es { user1.age * 2 } </h1>
const app = <h1> { getInfo(user1) } </h1>

// const root = ;

reactDom.render(app, document.getElementById("root"));
