import { useEffect, useState } from 'react'

import './App.css'
import image from "./assets/background.jpg"

function App() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState("")
  const [IMC, setIMC] = useState(0)

  const Classificacao = ({imc}) => {
    if (!imc) return null // não exibe nada se não houver IMC calculado

    if (imc < 18.50) {
        return(
            <p>Seu índice de massa corporal é {calcularIMC()} e <br /> se encontra <b style={{color: "#C4E538"}}>ABAIXO DO PESO</b></p>
        )
    } else if (imc < 25) {
        return(
            <p>Seu índice de massa corporal é {calcularIMC()} e <br /> se encontra <b style={{color: "#A3CB38"}}>EUTRÓFICO</b></p>
        )
    } else if (imc < 30) {
        return(
            <p>Seu índice de massa corporal é {calcularIMC()} e <br /> se encontra em <b style={{color: "#FFC312"}}>SOBREPESO</b></p>
        )
    } else if (imc < 35) {
        return(
            <p>Seu índice de massa corporal é {calcularIMC()} e <br /> se encontra em <b style={{color: "#F79F1F"}}>OBSEIDADE GRAU I</b></p>
        )
    } else if (imc < 40) {
        return(
            <p>Seu índice de massa corporal é {calcularIMC()} e <br /> se encontra em <b style={{color: "#EE5A24"}}>OBSEIDADE GRAU II</b></p>
        )
    } else {
        return(
            <p>Seu índice de massa corporal é {calcularIMC()} e <br /> se encontra em <b style={{color: "#EA2027"}}>OBSEIDADE GRAU III</b></p>
        )
    }
  }

  const Tabela = ({ imc }) => {
    if (!imc) return null;
  
    const getCorLinha = (min, max) => {
      if (imc >= min && (max === null || imc < max)) {
        if (min === 0 && max === 18.5) return "#C4E538";
        if (min === 18.5 && max === 25) return "#A3CB38";
        if (min === 25 && max === 30) return "#FFC312";
        if (min === 30 && max === 35) return "#F79F1F";
        if (min === 35 && max === 40) return "#EE5A24";
        if (min === 40) return "#EA2027";
      }
      return "";
    };
  
    return (
      <table>
        <thead>
          <tr>
            <th className="border-table" scope="col">Classificação</th>
            <th className="border-table" scope="col">IMC</th>
          </tr>
        </thead>
  
        <tbody>
          <tr style={{ backgroundColor: getCorLinha(0, 18.5), color: 'black' }}>
            <td className="border-table">Abaixo do Peso</td>
            <td className="second--border-table">Abaixo de 18,50</td>
          </tr>
          <tr style={{ backgroundColor: getCorLinha(18.5, 25), color: 'black' }}>
            <td className="border-table">Eutrófico</td>
            <td className="second--border-table">18,50 - 24,99</td>
          </tr>
          <tr style={{ backgroundColor: getCorLinha(25, 30), color: 'black' }}>
            <td className="border-table">Sobrepeso</td>
            <td className="second--border-table">25 - 29,99</td>
          </tr>
          <tr style={{ backgroundColor: getCorLinha(30, 35), color: 'black' }}>
            <td className="border-table">Obesidade Grau I</td>
            <td className="second--border-table">30 - 34,99</td>
          </tr>
          <tr style={{ backgroundColor: getCorLinha(35, 40), color: 'black' }}>
            <td className="border-table">Obesidade Grau II</td>
            <td className="second--border-table">35 - 39,99</td>
          </tr>
          <tr style={{ backgroundColor: getCorLinha(40, null), color: 'black' }}>
            <td className="border-table">Obesidade Grau III</td>
            <td className="second--border-table">Maior ou igual a 40</td>
          </tr>
        </tbody>
      </table>
    );
  };
  

  const calcularIMC = () => {
    if (peso > 0 && altura > 0) {
      return (peso / (altura ** 2)).toFixed(2)
    }
    return 0
  }

  useEffect(() => {
    setIMC(calcularIMC())
  }, [peso, altura])

  return (
    <>
      <header>
          <img src={image} alt="Frutas coloridas" />
          <h1>CALCULE SEU IMC</h1>
      </header>

      <form>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Digite seu peso: " maxLength="3" 
          
          onChange={({ target }) => {
            const value = target.value.replace(/[^0-9]/g, '');
            setPeso(value ? parseFloat(value) : 0);
          }}
          value={peso || ""}/>
          
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">kg</span>
          </div>
        </div>

        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Digite sua altura: " maxLength="4" 
          
          onChange={({target}) => {
            const value = target.value.replace(/\D/g, '');
            if (value.length === 0) {
              setAltura("");
            } else if (value.length === 1) {
              setAltura(`${value}.`); // adiciona o ponto após o primeiro número
            } else {
              setAltura(`${value[0]}.${value.slice(1, 3)}`); // formata como "X.YY"
            }
          }}
          value={altura}/>
          
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">m</span>
          </div>
        </div>
      </form>

      <Classificacao imc={IMC} />
      <Tabela imc={IMC} />
    </>
  )
  
}

export default App
