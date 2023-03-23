import React, { useState } from 'react'

function Avaleht() {
  const [kogus, uuendaKogus] = useState(6);
  const [sonum, uuendaSonum] = useState("Uuenda kogust!");
  const [laigitud, uuendaLaigitud] = useState(false); //false, true vaikse tahega

  function nulli() {
    uuendaKogus(0);
    uuendaSonum("Kogus nullitud")
  }

  function vahenda() {
    uuendaKogus(kogus - 1);
    uuendaSonum("Kogus vahendatud")
  }

  function suurenda() {  // funktsioonid alati sama 
    uuendaKogus(kogus + 1);
    uuendaSonum("Kogus suurendatud")
  }
  return (
    <div>
      
      {/*<div>{laigitud + 0}</div> */}
      { laigitud === true && <img src="/laigitud.svg" alt="" />}
      { laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      <button onClick={() => uuendaLaigitud(true)}>Muuda like peale</button>
      <button onClick={() => uuendaLaigitud(false)}>Muuda like maha</button>
      <div>{sonum}</div>
      {kogus > 0 && <button onClick={nulli}>Nulli tagasi</button>}
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      {kogus}
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht