import { useState } from 'react'
import './App.css'

function NumberTicket({value}) {
  const urlUno =`https://api.whatsapp.com/send?phone=+573212187011&text=Hola%2C+estoy+interesad%40+en+el+%2ATAPAZO%2A%F0%9F%98%8A%0A%0A_Quisiera+comprar+la+tapa+%2A%23%7B${toString(value+1)}%7D%2A_++%0A%0A%28INGRESE+SU+NOMBRE+%F0%9F%A4%93%2C+COMPROBANTE+DE+PAGO+A+NEQUI+%F0%9F%93%B2+%23+%2A3212187011%2A%60%60%60%28A+NOMBRE+DE+KAROLL%29%60%60%60%29.%0A%0A%0A%2AUna+vez+se+vea+reflejado+el+pago%2C+en+breve+se+les+asignaran+el+puesto.%2A%F0%9F%98%80%0A%0Ales+deseo+%2ASUERTE%2A+y+que+empiece+el+%2AJUEGO%2A+%F0%9F%91%BB`;

  const urlDos =`https://wa.me/573212187011?text=Hola, estoy interesado en el *TAPAZO*😊%0a
  me gustaria comprar la **TAPA#${value+2}**%0a%0a

  (en breve se negociara el metodo de pago) y se tomara en cuenta
  `;
  const urlTres =`https://wa.me/573212187011?text=Hola, estoy interesado en el *TAPAZO*😊%0a
  me gustaria comprar la **TAPA#${value+3}**%0a%0a

  (en breve se negociara el metodo de pago) y se tomara en cuenta
  `;
  const urlCuatro =`https://wa.me/573212187011?text=Hola, estoy interesado en el *TAPAZO*😊%0a
  me gustaria comprar la **TAPA#${value+4}**%0a%0a

  (en breve se negociara el metodo de pago) y se tomara en cuenta
  `;
  const urlCinco =`https://wa.me/573212187011?text=Hola, estoy interesado en el *TAPAZO*😊%0a
  me gustaria comprar la **TAPA#${value+5}**%0a%0a

  (en breve se negociara el metodo de pago) y se tomara en cuenta
  `;
  const urlSeis =`https://wa.me/573212187011?text=Hola, estoy interesado en el *TAPAZO*😊%0a
  me gustaria comprar la **TAPA#${value+6}**%0a%0a

  (en breve se negociara el metodo de pago) y se tomara en cuenta


  `;
  return (
    <div>
      <button className='buttonTicket'><a href={urlUno} target='_blank'>{value + 1}</a></button>
      <button className='buttonTicket'><a href={urlDos} target='_blank'>{value + 2}</a></button>
      <button className='buttonTicket'><a href={urlTres} target='_blank'>{value + 3}</a></button>
      <button className='buttonTicket'><a href={urlCuatro} target='_blank'>{value + 4}</a></button>
      <button className='buttonTicket'><a href={urlCinco} target='_blank'>{value + 5}</a></button>
      <button className='buttonTicket'><a href={urlSeis} target='_blank'>{value + 6}</a></button>
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
