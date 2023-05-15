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
import Tooted from './Pages/Tooted';
import HaldaTooted from './Pages/HaldaTooted';
import YksikToode from './Pages/YksikToode';
import MuudaToode from './Pages/MuudaToode';
import Tagasiside from './Pages/Tagasiside';




function App() {
  const[teema, uuendaTeema] = useState(localStorage.getItem("theme") || "hele-leht");

  const muudaTeemaTume = () => {
    uuendaTeema("tume-leht");
    localStorage.setItem("theme", "tume-leht");
  }

  const muudaTeemaHele = () => {
    uuendaTeema("hele-leht")
    localStorage.setItem("theme", "hele-leht");
  }



  return (
    <div className={teema}>

      {teema === "hele-leht" &&<button onClick={muudaTeemaTume}>Tume leht</button>}
      {teema === "tume-leht" &&<button onClick={muudaTeemaHele}>Hele leht</button>}


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

      <Link to="/tooted">
      < button className="nupp">Tooted</button>
      </Link>

      <Link to="/halda">
      < button className="nupp">Halda Tooteid</button>
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
        <Route path="tooted" element={ <Tooted /> } />
        <Route path="halda" element={ <HaldaTooted /> } />
        <Route path="toode/:index" element={ <YksikToode /> } />
        <Route path="muuda/:index" element={ <MuudaToode /> } />
        <Route path="tagasiside/:index" element={ <Tagasiside /> } />
      </Routes>

      {/* <div>FOOTER</div> */}

    </div>
  );
}

export default App;
