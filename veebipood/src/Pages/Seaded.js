import React, { useState } from 'react'

function Seaded() {
    const [keel, uuendaKeel] = useState("est");

    const muudaKeelEst = () => {
        uuendaKeel("est");
     }

    const muudaKeelEng = () => {
        uuendaKeel("eng");
    }

    const muudaKeelRus = () => {
        uuendaKeel("rus");
    }
  return (
    <div>
        <button onClick={muudaKeelEst}>Eesti keelseks</button>
        <button onClick={muudaKeelEng}>To English</button>
        <button onClick={muudaKeelRus}>Du pycckuj</button>
        {keel === "est" &&<div>Leht on eesti keeles</div>}
        {keel === "eng" &&<div>Page is in English</div>}
        {keel === "rus" &&<div>Sdes Pycckij rsok</div>}
        </div>
  )
}

export default Seaded