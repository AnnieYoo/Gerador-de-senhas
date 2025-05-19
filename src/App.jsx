import { useState } from "react";

export default function App() {
  const [passwordText, setPasswordText] = useState();
  const [copyText, setCopyText] = useState("Copiar");
  const [customSize, setCustomSize] = useState(12);
  const [showInput, setShowInput] = useState(false);

  const passwordSize = showInput ? customSize : 8;

  function caracter() {
    const caracter =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    let password = "";
    let length = passwordSize;
    for (let i = 0; i < length; i++) {
      password += caracter[Math.floor(Math.random() * caracter.length)];
    }
    setCopyText("Copiar");
    return setPasswordText(password);
  }

  function copy() {
    if (!passwordText) return;
    navigator.clipboard.writeText(passwordText);
    setCopyText("Copiado!");
  }

  return (
    <>
      <h1>Gerador de senhas</h1>
      <div className="content">
        <label htmlFor="passwordShow">Customizar tamanho:</label>
        <input
          type="checkbox"
          id="passwordShow"
          value={showInput}
          onChange={() => setShowInput((currentState) => !currentState)}
        />
      </div>

      {showInput ? (
        <div>
          <input
            type="Number"
            min={1}
            id="passwordSize"
            value={customSize}
            onChange={(ev) => setCustomSize(ev.target.value)}
          />
        </div>
      ) : null}
      <div>
        <button onClick={caracter}>
          Gerar senha de {passwordSize} caracteres
        </button>
        <button onClick={copy}>{copyText}</button>
        <p>{passwordText}</p>
      </div>
    </>
  );
}
