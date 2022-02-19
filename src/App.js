import React, {useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Header from './Components/Header/Header';
import CharacterGrid from './Components/CharactersInfo/CharacterGrid';

function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState([])

  useEffect(()=>{
    const fetchItems = async () => {
      const result = await axios('https://akabab.github.io/superhero-api/api/all.json')
      
      // console.log(result.data)
      setItems(result.data);
      setIsLoading(false) //now loading is done after getting of data
      
    }

    fetchItems();
  });

  return (
    <div className="App">
      <Header />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
