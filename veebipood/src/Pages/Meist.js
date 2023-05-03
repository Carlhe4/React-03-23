import React, {useState} from 'react'


function Meist() {
const[tootajad, uuendaTootajad] = useState(["Signe Riisalo","Riina Sikkut","Maarjo Mandmaa","Ulla Saar","Hanna Vsevlov","Heidi Alasepp","Nele Labi"]);

const sorteeriEesnimi = () => {
  tootajad.sort();
  uuendaTootajad(tootajad.slice());
}


const sorteeriTahed = () => {
  tootajad.sort((a,b) => a.length - b.length);
  uuendaTootajad(tootajad.slice());
}
const filtreeriVah10Tahte = () => {
  const vastus = tootajad.filter(t => t.length >= 10);
  uuendaTootajad(vastus);
}

const kustuta = (jrkNr) => {
  tootajad.splice(jrkNr, 1);
  uuendaTootajad(tootajad.slice());
}

  return (
    <div>
      <button onClick={sorteeriEesnimi}>Sorteeri eesnime esitahe jargi</button>
      
      <button onClick={filtreeriVah10Tahte}>Filtreeri kellel on 10 voi rohkem tahte</button>
      <button onClick={sorteeriTahed}>Sorteeri tahtede arvu jargi</button>
      <div>Tootajad</div>
      {tootajad.map((e, jrkNr) => <div>{e} <button onClick={() => kustuta(jrkNr)}>x</button></div>)}
      {/*<div>Signe Riisalo</div>
      <div>Riina Sikkut</div>
      <div>Maarjo Mandmaa</div>
      <div>Ullar Saar</div>
      <div>Hanna Vsevlov</div>
      <div>Heidi Alasepp</div>
      <div>Nele Labi</div> */}
    </div>
  )
}

export default Meist