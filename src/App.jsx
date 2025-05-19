import { useState } from "react";

export default function App() {
  const [passwordText, setPasswordText] = useState();
  const [copyText, setCopyText] = useState("Copiar");
  const [passwordSize, setPasswordSize] = useState(12);

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
      <input
        type="Number"
        min={1}
        id="passwordSize"
        value={passwordSize}
        onChange={(ev) => setPasswordSize(ev.target.value)}
      />
      <div>
        <button onClick={caracter}>Gerar</button>
        <button onClick={copy}>{copyText}</button>
        <p>{passwordText}</p>
      </div>
    </>
  );
}
