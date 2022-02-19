import React, {useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Header from './Components/Header/Header';
import CharacterGrid from './Components/CharactersInfo/CharacterGrid';
import Search from './Components/Search/Search';

function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(()=>{
    const fetchItems = async () => {
      const result = await axios(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json?name=${query}`)
    
      // console.log(result.data)
      setItems(result.data);
      setIsLoading(false) //now loading is done after getting of data
      
    }

    fetchItems();
  }, [query]);

  return (
    <div className="App">
      <Header />
      <Search getQuery={(q)=>{setQuery(q)}} />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
