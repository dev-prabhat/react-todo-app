import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Todoitem from './Todoitem'


const Todolist = ({items,title,addNew}) =>{
    const count = items.length
    return(
    <div className="todolist">
      <Header title={title} addNew={addNew}/>
       
        <ul className="list-unstyled">
          {items.map(item => <Todoitem item={item}/>)}
        </ul>
       <Footer count={count}/>
      </div>
    )
}

export default Todolist