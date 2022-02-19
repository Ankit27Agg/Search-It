import React from 'react'

const CharacterItems = ({item}) => {
  console.log(item)
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.images.lg} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <h4>Actor Name:</h4> <p>{item.biography.fullName}</p>
            </li>
            <li>
              <h4>Appearance:</h4> <p>{item.appearance.race}</p>
            </li>
            <li>
              <h4>Publisher:</h4> <p>{item.biography.publisher}</p>
            </li>
            <li>
              <h4>Birth Place:</h4> <p>{item.biography.placeOfBirth}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItems
