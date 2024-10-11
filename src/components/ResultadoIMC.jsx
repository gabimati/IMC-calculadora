// src/components/ResultadoIMC.js
import React from 'react';

function ResultadoIMC({ imc, classificacao }) {
    return (
        <div>
            {imc && (
                <>
                    <h2>O valor do seu IMC é: {imc}</h2>
                    <h3>Classificação: {classificacao}</h3>
                </>
            )}
        </div>
    );
}

export default ResultadoIMC;
