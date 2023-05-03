import React from 'react'
import { useParams } from 'react-router-dom';
import tootedFailist from "../data/tooted.json"

function YksikToode() {
    const { index } = useParams();
    const toode = tootedFailist[index];


  return (
    <div>
        <div>Toote nimi: {toode}</div>
        <div>Toote jarjekorranumber: {index}</div>
        <div>Toote kirjeldus:....</div>
    </div>
  )
}

export default YksikToode