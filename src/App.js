import React, { useState } from 'react';

function App() {
  // useState retorna 2 funciones
  // 1er: El state actual = this.state
  // 2do: Función que actualiza el state this.setState
  const [citas, guardarCita] = useState([]);

  // console.log(citas);

  return (
    <h1>Hola</h1>
  )
}

export default App;