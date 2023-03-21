import React from 'react'
import { Link } from 'react-router-dom'

function Ostukorv() {
  return (
    <div>
        <div>Ostukorv on tuhi</div>
        <Link to="/avaleht">Tooteid lisama</Link>
    </div>
  )
}

export default Ostukorv