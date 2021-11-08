import React from 'react'
import AddItem from './AddItem'
import Image from './Image'


import './style.css'

const Todo = () =>{
    

    return(
        <div className="main-div">
            <div className="child-div">
               <Image/>
               <AddItem/>
            </div>
        </div>
    )
}

export default Todo