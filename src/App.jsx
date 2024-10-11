import React, { useState } from 'react';

import FormIMC from './components/FormIMC';
import ResultadoIMC from './components/ResultadoIMC';
import './App.css';

function App() {
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (altura, peso) => {
    const alturaEmMetros = altura / 100; // Converte altura para metros
    const imcCalculado = peso / (alturaEmMetros * alturaEmMetros);
    setImc(imcCalculado.toFixed(2));
    classificarIMC(imcCalculado);
  };

  const classificarIMC = (valor) => {
    if (valor < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (valor < 24.9) {
      setClassificacao('Peso normal');
    } else if (valor < 29.9) {
      setClassificacao('Sobrepeso');
    } else {
      setClassificacao('Obesidade');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <FormIMC onCalcular={calcularIMC} />
      <ResultadoIMC imc={imc} classificacao={classificacao} />
    </div>
  );
}

export default App;
