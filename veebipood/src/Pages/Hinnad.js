import React, { useState } from 'react'

function Hinnad() {
    const [hinnad, uuendaHinnad] = useState([54,231,22,54,23,512,37]);
    const [kogusumma, uuendaKogusumma] = useState(0);
    
    const reset = () => {
        uuendaHinnad([54,231,22,54,23,512,37])

    }
    
    const sorteeriKasvavalt = () => {
        hinnad.sort((a,b) => a - b);
        uuendaHinnad(hinnad.slice());
    }

    const arvutaKogusumma = () => {
        let summa = 0;
        hinnad.forEach(hind => summa = summa + hind);
        uuendaKogusumma(summa);
    }

    const filtreeriSuuremadKui50 = () => {
        const vastus = hinnad.filter(hind => hind > 50);
        uuendaHinnad(vastus); 
    }
  
    return (
    <div>
        <button onClick={reset}>Reset filtreerimised</button>
        <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
        <button onClick={filtreeriSuuremadKui50}>Jata alles suuremad kui 50</button>
        {hinnad.map(el => <div>{el}</div>)}
        <button onClick={arvutaKogusumma}>Arvuta kogusumma</button>
        <div>{kogusumma}</div>
    </div>
  )
}

export default Hinnad