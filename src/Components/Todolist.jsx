import React from 'react'
import Header from './Header'
import Todoitem from './Todoitem'


const Todolist = ({items,title}) =>{
    return(
    <div className="todolist">
      <Header title={title}/>
       
        <ul className="list-unstyled">
          {items.map(item => <Todoitem item={item}/>)}
        </ul>
      </div>
    )
}

export default Todolist