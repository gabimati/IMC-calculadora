import React, { useState } from 'react';

function FormIMC({ onCalcular }) {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    const handleSubmit = (e) => {e.preventDefault();
        if (altura && peso) {
            onCalcular(altura, peso);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Altura (cm): </label>
                <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)}required/>
            </div>
            <div>
                <label>Peso (kg): </label>
                <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)}required/>
            </div>
            <button type="submit">Calcular IMC</button>
        </form>
    );
}

export default FormIMC;
