import React, { useState } const desenharArmario = () => {
  const largura = 300;
  const altura = 400;
  const larguraPorta = largura / portas;

  return (
    <svg width={largura} height={altura} style={{background:"#eee",borderRadius:8}}>
      
      {/* Corpo */}
      <rect x="0" y="0" width={largura} height={altura} fill={cor} stroke="#333" strokeWidth="3"/>

      {/* Portas */}
      {Array.from({ length: portas }).map((_, i) => (
        <line
          key={i}
          x1={larguraPorta * i}
          y1="0"
          x2={larguraPorta * i}
          y2={altura}
          stroke="#222"
          strokeWidth="2"
        />
      ))}

      {/* Gavetas */}
      {Array.from({ length: gavetas }).map((_, i) => (
        <rect
          key={i}
          x={20}
          y={altura - (i+1)*60}
          width={largura-40}
          height="50"
          fill="#ffffff88"
          stroke="#222"
        />
      ))}
    </svg>
  );
}; from "react";

export default function App() {
  const [portas, setPortas] = useState(2);
  const [gavetas, setGavetas] = useState(2);
  const [cor, setCor] = useState("Branco");

  return (
    <div style={{fontFamily:"Arial", padding:20}}>
      <h1>Configurador de Armário Infantil</h1>
      <p>Módulo 90 x 240 cm</p>

      <h3>Portas</h3>
      <input type="range" min="1" max="4" value={portas}
        onChange={(e)=>setPortas(e.target.value)} />
      <p>{portas} portas</p>

      <h3>Gavetas</h3>
      <input type="range" min="0" max="6" value={gavetas}
        onChange={(e)=>setGavetas(e.target.value)} />
      <p>{gavetas} gavetas</p>

      <h3>Cor</h3>
      <select onChange={(e)=>setCor(e.target.value)}>
        <option>Branco</option>
        <option>Amadeirado</option>
        <option>Colorido</option>
      </select>

      <hr/>

      <h2>Resumo</h2>
      <button
  onClick={enviarWhats}
  style={{
    marginTop:20,
    padding:"15px 25px",
    background:"#25D366",
    color:"white",
    border:"none",
    borderRadius:8,
    fontSize:18
  }}
>
  Enviar orçamento no WhatsApp
</button>
      <p>{portas} portas</p>
      <p>{gavetas} gavetas</p>
      <p>Cor: {cor}</p>
      const enviarWhats = () => {
  const msg =
    `Olá! Quero orçamento do armário infantil:\n` +
    `${portas} portas\n` +
    `${gavetas} gavetas\n` +
    `Cor: ${cor}`;

  const url = `https://wa.me/5521996068074?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
};
    
  );<div className="preview"></div>
}
