import React, { useState } from 'react'

function Seaded() {
    const [keel, uuendaKeel] = useState(localStorage.getItem("keel") || "est");

    const muudaKeelEst = () => {
        uuendaKeel("est");
        localStorage.setItem("keel", "est")
     }

    const muudaKeelEng = () => {
        uuendaKeel("eng");
        localStorage.setItem("keel", "eng")
    }

    const muudaKeelRus = () => {
        uuendaKeel("rus");
        localStorage.setItem("keel", "rus")
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