import React from 'react'
import logo1 from '../../Images/favicon.png'
import logo2 from '../../Images/logo.jpg'
import '../Header/Header.css'
const Header = () => {
  return (
    <div className='center'>
      <img src={logo1} alt='' className='img1'/>
      <img src={logo2} alt='' className='img2'/>
    </div>
  )
}

export default Header
