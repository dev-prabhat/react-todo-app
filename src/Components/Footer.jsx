import React from 'react'

const Footer = ({count}) =>{
    return(
        <div className='todo-footer'>
           <strong>
               <span className="count-todos">{count}</span>
           </strong>
        </div>
    )
}

export default Footer