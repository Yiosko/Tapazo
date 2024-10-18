import { useState } from 'react'
import './App.css'
import InfoPanel from './info.jsx'

function NumberTicket({value, isSelected}) {
  
  const classname = isSelected ? 'buttonTicket' : 'seleccionado';

  const urlUno = isSelected && `https://api.whatsapp.com/send?phone=+573212187011&text=Hola%2C+estoy+interesad%40+en+el+%2ATAPAZO%2A%F0%9F%98%8A%0A%0A_Quisiera+comprar+la+tapa+%2A%23${value+1}%2A_++%0A%0A%28INGRESE+SU+NOMBRE+%F0%9F%A4%93%2C+COMPROBANTE+DE+PAGO+A+NEQUI+%F0%9F%93%B2+%23+%2A3212187011%2A%60%60%60%28A+NOMBRE+DE+KAROLL%29%60%60%60%29.%0A%0A%0A%2AUna+vez+se+vea+reflejado+el+pago%2C+en+breve+se+les+asignaran+el+puesto.%2A%F0%9F%98%80%0A%0Ales+deseo+%2ASUERTE%2A+y+que+empiece+el+%2AJUEGO%2A+%F0%9F%91%BB`
 
  return (

      <a href={urlUno} target='_blank'><button className={classname} id={value+1}>{value + 1}</button></a>

  )
}

function App() {

  const [canasta, setCanasta] = useState(true)

  const [infor, useInfor] = useState(false)

  const infoClick = () => {
    if (infor){
      useInfor(false)
    } else if(infor === false){
      useInfor(true)
    }
  }

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
          <button onClick={infoClick}>?</button>
          
          {

            infor === true && <>
              <InfoPanel/>
              <button onClick={infoClick} className='exit-panel'>X</button>
            </>
          }
  
          
          {
            canasta === true ?
            <>
            <h2>Canasta Uno</h2>

            <div>
              <NumberTicket value={0} isSelected={true}/>
              <NumberTicket value={1} isSelected={true}/>
              <NumberTicket value={2} isSelected={true}/>
              <NumberTicket value={3} isSelected={true}/>
              <NumberTicket value={4} isSelected={true}/>
              <NumberTicket value={5} isSelected={true}/>
            </div>
            <div>
              <NumberTicket value={6} isSelected={true}/>
              <NumberTicket value={7} isSelected={true}/>
              <NumberTicket value={8} isSelected={true}/>
              <NumberTicket value={9} isSelected={true}/>
              <NumberTicket value={10} isSelected={true}/>
              <NumberTicket value={11} isSelected={true}/>
            </div>
            <div>
              <NumberTicket value={12} isSelected={true}/>
              <NumberTicket value={13} isSelected={true}/>
              <NumberTicket value={14} isSelected={true}/>
              <NumberTicket value={15} isSelected={true}/>
              <NumberTicket value={16} isSelected={true}/>
              <NumberTicket value={17} isSelected={true}/>
            </div>
            <div>
              <NumberTicket value={18} isSelected={false}/>
              <NumberTicket value={19} isSelected={true}/>
              <NumberTicket value={20} isSelected={true}/>
              <NumberTicket value={21} isSelected={true}/>
              <NumberTicket value={22} isSelected={true}/>
              <NumberTicket value={23} isSelected={true}/>
            </div>
            <div>
              <NumberTicket value={24} isSelected={true}/>
              <NumberTicket value={25} isSelected={true}/>
              <NumberTicket value={26} isSelected={true}/>
              <NumberTicket value={27} isSelected={true}/>
              <NumberTicket value={28} isSelected={true}/>
              <NumberTicket value={29} isSelected={true}/>
            </div>
            <div>
              <NumberTicket value={30} isSelected={true}/>
              <NumberTicket value={31} isSelected={true}/>
              <NumberTicket value={32} isSelected={true}/>
              <NumberTicket value={33} isSelected={true}/>
              <NumberTicket value={34} isSelected={true}/>
              <NumberTicket value={35} isSelected={true}/>
            </div>
            </>
            

            : 
            <>
            <h2>Canasta Dos</h2>
            <div>
              <NumberTicket value={36} isSelected={true}/>
              <NumberTicket value={37} isSelected={true}/>
              <NumberTicket value={38} isSelected={true}/>
              <NumberTicket value={39} isSelected={true}/>
              <NumberTicket value={40} isSelected={true}/>
              <NumberTicket value={41} isSelected={true}/>
            </div>
            <div>
              <NumberTicket value={42} isSelected={true}/>
              <NumberTicket value={43} isSelected={true}/>
              <NumberTicket value={44} isSelected={true}/>
              <NumberTicket value={45} isSelected={true}/>
              <NumberTicket value={46} isSelected={true}/>
              <NumberTicket value={47} isSelected={true}/>
            </div>
            <div>
              <NumberTicket value={48} isSelected={true}/>
              <NumberTicket value={49} isSelected={true}/>
              <NumberTicket value={50} isSelected={true}/>
              <NumberTicket value={51} isSelected={true}/>
              <NumberTicket value={52} isSelected={true}/>
              <NumberTicket value={53} isSelected={true}/>
            </div>
            <div>
              <NumberTicket value={54} isSelected={true}/>
              <NumberTicket value={55} isSelected={true}/>
              <NumberTicket value={56} isSelected={true}/>
              <NumberTicket value={57} isSelected={true}/>
              <NumberTicket value={58} isSelected={true}/>
              <NumberTicket value={59} isSelected={true}/>
            </div>
            <div>
              <NumberTicket value={60} isSelected={true}/>
              <NumberTicket value={61} isSelected={true}/>
              <NumberTicket value={62} isSelected={true}/>
              <NumberTicket value={63} isSelected={true}/>
              <NumberTicket value={64} isSelected={true}/>
              <NumberTicket value={65} isSelected={true}/>
            </div>
            <div>
              <NumberTicket value={66} isSelected={true}/>
              <NumberTicket value={67} isSelected={true}/>
              <NumberTicket value={68} isSelected={true}/>
              <NumberTicket value={69} isSelected={true}/>
              <NumberTicket value={70} isSelected={true}/>
              <NumberTicket value={71} isSelected={true}/>
            </div>
            </>

          }
          
    </>
  )
}

export default App
