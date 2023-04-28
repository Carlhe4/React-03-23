import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(["Coca cola", "Fanta", "Sprite"])
  
  
  return (
    
    <div>
        <div>Kokku esemeid ostukorvis: {ostukorv.length} tk</div>
        {ostukorv.map(element => <div>{element}</div>)}
        <div>Ostukorv on tuhi</div>
        <Link to="/avaleht">Tooteid lisama</Link>
    </div>
  )
}

export default Ostukorv