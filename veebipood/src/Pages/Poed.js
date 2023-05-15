import React, { useState } from 'react'
import poedFailist from "../data/poed.json"


function Poed() {
    const [poed, uuendaPoed] = useState (poedFailist)
    const [kogusumma, uuendaKogusumma] = useState(0);

    const arvutaKoguTahtedeArv = () => {
        let summa = 0;
        poed.forEach(ykspood => summa = summa + ykspood.length);
        uuendaKogusumma(summa);
    }

    const reset = () => {
        uuendaPoed(poedFailist)
    }
    
    const sorteeriEsitaht = () => {
        poed.sort((a,b) => a.localeCompare(b));
        uuendaPoed(poed.slice());
    }

    const sorteeriZA = () => {
        poed.sort((a,b) => b.localeCompare(a));
        uuendaPoed(poed.slice());
    }

    const sorteeriTahedKasv = () => {
        poed.sort((a,b) => a.length - b.length);
        uuendaPoed(poed.slice());
    }

    const sorteeriTahedKah = () => {
        poed.sort((a,b) => b.length - a.length);
        uuendaPoed(poed.slice());
    }

    const sorteeriKolmasTah = () => {
        poed.sort((a,b) => a[2].localeCompare(b[2]));
        uuendaPoed(poed.slice());
    }
    

    const filtreeriEgaLoppevad = () => {
        const vastus = poed.filter(yksPood =>yksPood.endsWith("e"))
        uuendaPoed(vastus);

    }

    const filtreeriVahemalt7Tahte = () => {
        const vastus = poed.filter(yksPood =>yksPood.length >= 7)
        uuendaPoed(vastus);

    }

    
    const filtreeriKellelon9Tahte = () => {
        const vastus = poed.filter(yksPood =>yksPood.length === 9)
        uuendaPoed(vastus);

    }

    const filtreeriKesSisaldabIsLyhendit = () => {
        const vastus = poed.filter(yksPood =>yksPood.includes("is"))
        uuendaPoed(vastus);

    }

    const filtreeriKellelKolmasTahtI = () => {
        const vastus = poed.filter(yksPood => yksPood[2] === "i")
        uuendaPoed(vastus);

    }

    const kustuta = (i) => {
        poed.splice(i,2);
        uuendaPoed(poed.slice());
    }    

    
  
  
    return (
   <div> 
    <button onClick={reset}>Reset filters</button>
    <div>{kogusumma}</div>
    <button onClick={arvutaKoguTahtedeArv}>Arvuta tahtede arv</button>
    <br /><br />
    <button onClick={sorteeriEsitaht}>Sorteeri esitahe jargi</button>
    <button onClick={sorteeriZA}>Tagurpidi</button>
    <button onClick={sorteeriTahedKasv}>Sorteeri tahtede arvu jargi kasvavalt</button>
    <button onClick={sorteeriTahedKah}>Sorteeri tahtede arvu jargi kahanevalt</button>
    <button onClick={sorteeriKolmasTah}>Sorteeri kolmanda tahe jargi</button>
    <br /><br />
    <button onClick={filtreeriEgaLoppevad}>Jata alles tahega 'e' loppevad</button>
    <button onClick={filtreeriVahemalt7Tahte}>Jata alles kellel on 7 voi rohkem tahte</button>
    <button onClick={filtreeriKellelon9Tahte}>Jata alles need kellel on 9 tahte</button>
    <button onClick={filtreeriKesSisaldabIsLyhendit}>Jata alles need sonad mis sisaldavad Is lyhendit</button>
    <button onClick={filtreeriKellelKolmasTahtI}>Jata alles need kellel on kolmas taht i</button>
    {poed.map((yksPood, i) => <div>{yksPood} <button onClick={() => kustuta(i)}>Kustuta</button></div>)}
   </div> 
  )
}

export default Poed