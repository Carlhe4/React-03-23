import React, { useRef, useState } from 'react'
import tootedFailist from "../data/tooted.json"

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa toode!");
  const inputiLuger = useRef();
  const hinnaviide = useRef();
  const aktiivneviide = useRef();
  const piltviide = useRef();



  //function lisa () {}
  //tapselt sama mis const

  const lisa = () => {
    if (inputiLuger.current.value === "") {
      uuendaSonum("Tuhja nimetusega toodet ei saa lisada");
    } else {
      uuendaSonum("Toode lisatud: " + inputiLuger.current.value);
      const uustoode = {
      "nimi": inputiLuger.current.value, 
      "hind": Number(hinnaviide.current.value),
      "aktiivne": aktiivneviide.current.checked,
      "pilt": piltviide.current.value
    }
      tootedFailist.push(uustoode);
    }

     
  }
  return (
    <div>
      <div>{sonum}</div>
      <label>Uue toote nimi</label> <br />
      <input ref={inputiLuger} type="text"  /> <br />
      <label>Toote hind</label> <br />
      <input ref={hinnaviide} type="number"  /> <br />
      <label>Toote aktiivsus</label> <br />
      <input ref={aktiivneviide} type="checkbox"  /> <br />
      <label>Toote pilt</label> <br />
      <input ref={piltviide} type="text"  /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
    </div>
  )
}
export default LisaToode
