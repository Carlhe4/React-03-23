import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Avaleht from './Pages/Avaleht';
import Ostukorv from './Pages/Ostukorv';
import LisaToode from './Pages/LisaToode';
import Meist from './Pages/Meist';
import Seaded from './Pages/Seaded';


function App() {
  return (
    <div className="App">
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

      <Routes>
        <Route path="" element={ <Navigate to="avaleht"/> } />
        <Route path="avaleht" element={ <Avaleht/> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="meist" element={ <Meist /> } />
        <Route path="seaded" element={ <Seaded /> } />
      </Routes>

      {/* <div>FOOTER</div> */}

    </div>
  );
}

export default App;
