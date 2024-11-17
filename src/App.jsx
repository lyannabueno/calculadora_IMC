import { useState } from 'react'

import image from "./assets/background.jpg"
import Formulario from './components/Formulario'
import Tabela from './components/Tabela'
import Classificacao from './components/Classificacao'

function App() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)

  const calcularIMC = () => {
    if (peso > 0 && altura > 0) {
      return (peso / (altura ** 2)).toFixed(2)
    }
    return 0
  }

  const imc = calcularIMC();

  return (
    <>
      <header>
          <img className='' src={image} alt="Frutas coloridas" />
          <h1 className=''>CALCULE SEU IMC</h1>
      </header>
      {/* <Formulario setPeso={setPeso} setAltura={setAltura}/>
      <Classificacao imc={imc}/>
      <Tabela imc={imc}/> */}
    </>
  )
}

export default App
