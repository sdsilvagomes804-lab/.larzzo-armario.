import { useState } from "react";

export default function App() {

  const [largura,setLargura]=useState(90);
  const [altura,setAltura]=useState(240);
  const [cor,setCor]=useState("Branco");

  const preco = Math.round((largura*altura)/100 + (cor==="Amadeirado"?350:0));

  const whatsapp = () =>{
    const msg=`Olá, quero um armário infantil:
Largura: ${largura}cm
Altura: ${altura}cm
Cor: ${cor}
Preço estimado: R$${preco}`;
    window.open(`https://wa.me/5521996068074?text=${encodeURIComponent(msg)}`,'_blank');
  }

  return (
    <div style={{background:"#111",minHeight:"100vh",color:"white",fontFamily:"Arial"}}>

      {/* TOPO */}
      <div style={{
        width:"100%",
        background:"#222",
        padding:"15px 20px",
        display:"flex",
        alignItems:"center",
        gap:15,
        marginBottom:20
      }}>
        <img src="/logo.png" style={{height:50}}/>
        <div>
          <h1 style={{margin:0,fontSize:22}}>Larzzo Móveis</h1>
          <span style={{fontSize:14,opacity:.8}}>Armários infantis sob medida</span>
        </div>
      </div>

      {/* CONTEUDO */}
      <div style={{padding:20}}>

        <label>Largura: {largura}cm</label>
        <input type="range" min="60" max="120" value={largura} onChange={e=>setLargura(e.target.value)} />

        <br/><br/>

        <label>Altura: {altura}cm</label>
        <input type="range" min="180" max="260" value={altura} onChange={e=>setAltura(e.target.value)} />

        <br/><br/>

        <select onChange={e=>setCor(e.target.value)}>
          <option>Branco</option>
          <option>Amadeirado</option>
        </select>

        <h2>Preço estimado: R$ {preco}</h2>

        <button onClick={whatsapp} style={{
          background:"#25D366",
          border:"none",
          padding:"15px 25px",
          fontSize:18,
          borderRadius:10,
          color:"white"
        }}>
          Enviar orçamento no WhatsApp
        </button>

      </div>
    </div>
  );
}
