import React from 'react'
import InputBox from './InputBox'

const Header = ({title,addNew}) =>{
    return(
      <header>
          <h1>{title}</h1>
          <InputBox addNew={addNew}/>
      </header>
    )
}

export default Header