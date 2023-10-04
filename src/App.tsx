import './App.css'
import { useQuery } from '@apollo/client'
import { GET_FILMS } from './queries/Swapi_query'
import Films from './components/Films/Films';

function App() {
  const { data, loading } = useQuery(GET_FILMS);
  console.log(data)

  return (
    <>
      <h1>Movies</h1>
      {
        loading ? <span>Loading . . .</span>
          :
          data && data.allFilms?.films?.map((ele, index) => {           
            return (
              <Films Films={ele} key={index}/>
            )
          })
      }
    </>
  )
}

export default App
