import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Avaleht from './Pages/Avaleht';
import Ostukorv from './Pages/Ostukorv';
import LisaToode from './Pages/LisaToode';
import Meist from './Pages/Meist';
import Seaded from './Pages/Seaded';
import { useState } from 'react';
import Hinnad from './Pages/Hinnad';
import Poed from './Pages/Poed';


function App() {
  const[teema, uuendaTeema] = useState("hele-leht");

  return (
    <div className={teema}>

      {teema === "hele-leht" &&<button onClick={() => uuendaTeema("tume-leht")}>Tume leht</button>}
      {teema === "tume-leht" &&<button onClick={() => uuendaTeema("hele-leht")}>Hele leht</button>}


      <Link to="/avaleht">
        <img className="pilt" src="https://nobecars.com/wp-content/uploads/2022/01/Untitled-2-5-1024x473.png" alt="" />
      </Link>
      
      <Link to="/ostukorv">
      < button className="nupp"> Ostukorv</button>
      </Link>



      <Link to="/lisa-toode">
      < button className="nupp"> Lisa toode</button>
      </Link>

      <Link to="/meist">
      < button className="nupp"> Meist</button>
      </Link>

      <Link to="/seaded">
      < button className="nupp"> Seaded</button>
      </Link>

      <Link to="/hinnad">
      < button className="nupp">Hinnad</button>
      </Link>

      <Link to="/poed">
      < button className="nupp">Poed</button>
      </Link>

      <Routes>
        <Route path="" element={ <Navigate to="avaleht"/> } />
        <Route path="avaleht" element={ <Avaleht/> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="meist" element={ <Meist /> } />
        <Route path="seaded" element={ <Seaded /> } />
        <Route path="hinnad" element={ <Hinnad /> } />
        <Route path="poed" element={ <Poed /> } />

      </Routes>

      {/* <div>FOOTER</div> */}

    </div>
  );
}

export default App;
