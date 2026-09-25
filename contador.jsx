import { useState } from "react";

export default function Contador() {
  const [numero, setNumero] = useState(0);
  const [passo, setPasso] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);

  function incrementar() {
    const novoValor = numero + passo;
    if (novoValor > max) {
      setNumero(max);
    } else {
      setNumero(novoValor);
    }
  }

  function decrementar() {
    const novoValor = numero - passo;
    if (novoValor < min) {
      setNumero(min);
    } else {
      setNumero(novoValor);
    }
  }

  function resetar() {
    if (min > 0) {
      setNumero(min);
    } else {
      setNumero(0);
    }
  }

  function mudarMin(valor) {
    const novoMin = Number(valor);
    setMin(novoMin);
    if (novoMin > max) {
      setMax(novoMin);
    }
    if (numero < novoMin) {
      setNumero(novoMin);
    }
  }

  function mudarMax(valor) {
    const novoMax = Number(valor);
    setMax(novoMax);
    if (novoMax < min) {
      setMin(novoMax);
    }
    if (numero > novoMax) {
      setNumero(novoMax);
    }
  }

  function mudarPasso(valor) {
    const novoPasso = Number(valor);
    if (novoPasso > 0) {
      setPasso(novoPasso);
    } else {
      setPasso(1);
    }
  }

  return (
    <div style={{
      maxWidth: "320px",
      margin: "40px auto",
      padding: "24px",
      backgroundColor: "#1a1414",
      border: "1px solid #3a2626",
      borderRadius: "6px",
      fontFamily: "Arial, sans-serif",
      color: "#f2ecec"
    }}>
      <h2 style={{ textAlign: "center", marginTop: 0, color: "#e8e6e6" }}>Contador</h2>

      <div style={{
        fontSize: "48px",
        textAlign: "center",
        fontWeight: "bold",
        margin: "10px 0 20px 0",
        color: "#c62828"
      }}>
        {numero}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
        <button onClick={decrementar} style={botaoEstilo}>-</button>
        <button onClick={resetar} style={{ ...botaoEstilo, backgroundColor: "#3a2626" }}>Reset</button>
        <button onClick={incrementar} style={botaoEstilo}>+</button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label>
          Step
          <input
            type="number"
            value={passo}
            min="1"
            onChange={(e) => mudarPasso(e.target.value)}
            style={inputEstilo}
          />
        </label>

        <label>
          Mínimo
          <input
            type="number"
            value={min}
            onChange={(e) => mudarMin(e.target.value)}
            style={inputEstilo}
          />
        </label>

        <label>
          Máximo
          <input
            type="number"
            value={max}
            onChange={(e) => mudarMax(e.target.value)}
            style={inputEstilo}
          />
        </label>
      </div>
    </div>
  );
}

const botaoEstilo = {
  backgroundColor: "#c62828",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  padding: "8px 16px",
  fontSize: "18px",
  cursor: "pointer"
};

const inputEstilo = {
  width: "100%",
  padding: "6px",
  marginTop: "4px",
  backgroundColor: "#221818",
  border: "1px solid #3a2626",
  borderRadius: "4px",
  color: "#f2ecec"
};
