import React, { useState } from 'react'
import './Search.css'

const Search = ({getQuery}) => {
  const [text, setText] = useState('');

  const func = (q) => {
    setText(q)
    getQuery(q)
  }

  return (
      <section className='search'>
        <form>
          <input 
            type='text'
            placeholder='Search Character'
            value={text}
            onChange={(e)=>{func(e.target.value)}}
          />
          
        </form>
      </section>
  )
}

export default Search
