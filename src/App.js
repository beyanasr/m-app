import './App.css';
import NameSearch from './components/NameSearch';
import RatingSearch from './components/RatingSearch';
import MovieList from './components/MovieList';
import MovieAdd from './components/MovieAdd';
import {useState} from 'react';

function App() {
  const [film,setFilm] = useState([
    {
      title: "Game of thrones",
      description: "Genre : Fantasy",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61r-vt0bLZL._AC_SX522_.jpg",
      rate: "3",
    },
    {
      title: "Breaking bad",
      description:
        "Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
      rate: "4",
    },
    {
      title: "hunter x hunter",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/08/01/09/52/4803203.jpg",
      rate: "5",
    },
])
const add=(newMovie)=>{
  setFilm(film=>[...film,newMovie])


}
  return (
    <div className="App">
      <header className="App-header">
        <NameSearch/>
        <RatingSearch/>
        <MovieList film={film}/>
        <MovieAdd add={add}/>
      
      </header>
    </div>
  );
}

export default App;