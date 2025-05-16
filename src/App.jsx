import { useState } from "react";

export default function App() {
  const [passwordText, setPasswordText] = useState();
  const [copyText, setCopyText] = useState("Copiar");

  function caracter() {
    const caracter =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    let password = "";
    for (let i = 0; i < 10; i++) {
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
      <div>
        <button onClick={caracter}>Gerar</button>
        <button onClick={copy}>{copyText}</button>
        <p>{passwordText}</p>
      </div>
    </>
  );
}
