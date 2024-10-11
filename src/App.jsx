/* eslint-disable react/prop-types */
import { useState } from 'react'
import cervezaFond from './cervezafond.png'
import './App.css'

function NumberTicket({value}) {
  return (
    <div>
      <button className='buttonTicket'><a href="https://wa.me/573212187011?text=Hola">{value + 1}</a></button>
      <button className='buttonTicket'><a href="">{value + 2}</a></button>
      <button className='buttonTicket'><a href="">{value + 3}</a></button>
      <button className='buttonTicket'><a href="">{value + 4}</a></button>
      <button className='buttonTicket'><a href="">{value + 5}</a></button>
      <button className='buttonTicket'><a href="">{value + 6}</a></button>
    </div>
  )
}

function App() {

  const [canasta, setCanasta] = useState(true)

  const handleClick = () =>{
    if(canasta){
    setCanasta(false)
    } else if( canasta === false) {
      setCanasta(true)
    }
  }
  return (
    <>
          <h1>TAPAZO</h1>
          <img src={cervezaFond} className='fondcerveza' alt="cerveza-fond" />

          <button onClick={handleClick}>CAMBIAR CANASTA</button>
          {
            canasta === true ?
            <>
            <h2>Canasta Uno</h2>
            <NumberTicket value={0} />
            <NumberTicket value={6} />
            <NumberTicket value={12} />
            <NumberTicket value={18} />
            <NumberTicket value={24} />
            <NumberTicket value={30} />
            </>
            

            : 
            <>
            <h2>Canasta Dos</h2>
            <NumberTicket value={36} />
            <NumberTicket value={42} />
            <NumberTicket value={48} />
            <NumberTicket value={54} />
            <NumberTicket value={60} />
            <NumberTicket value={66} />
            </>

          }
          
    </>
  )
}

export default App
