import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ostukorvFailist from "../data/ostukorv.json";

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist)
  
  const tyhjenda = () => {
    ostukorvFailist.splice(0)
    uuendaOstukorv(ostukorvFailist.slice());
  }

  const kustuta = (index) => {
    ostukorvFailist.splice(index,1);
    uuendaOstukorv(ostukorvFailist.slice());
  }
  
  return (
    
    <div>
      {ostukorv.length > 0 && <button onClick={tyhjenda}>Tuhjenda</button>}
      {ostukorv.length > 0 && <div>Kokku esemeid ostukorvis: {ostukorv.length} tk</div>}
      {ostukorv.map((element, index) => <div>{index} {element} <button onClick={() =>kustuta(index)}>x</button></div>)}
      {ostukorv.length === 0 &&
      <div>
        <div>Ostukorv on tuhi</div>
        <Link to="/avaleht">Tooteid lisama</Link>
        </div>}
    </div>
  )
}

export default Ostukorv