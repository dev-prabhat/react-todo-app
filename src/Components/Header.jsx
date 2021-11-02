import React from 'react'
import InputBox from './InputBox'

const Header = ({title}) =>{
    return(
      <header>
          <h1>{title}</h1>
          <InputBox/>
      </header>
    )
}

export default Header