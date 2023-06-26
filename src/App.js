
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/Navbar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import { Action,Originals,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries } from './urls';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner/>
     <RowPost url={Originals} title='Netflix Originals' />
     <RowPost url={Action} title='Actions' isSmall />
     <RowPost url={ComedyMovies} title='ComedyMovies' isSmall/>
      <RowPost url={HorrorMovies} title='HorrorMovies' isSmall/>
      <RowPost url={RomanceMovies} title='RomanceMovies' isSmall/>
      
    </div>
  );
}

export default App;
