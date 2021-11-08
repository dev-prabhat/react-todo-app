import React from 'react'

const ShowItems = ({item ,deleteItem}) => {
    return(
        <div className="eachItem">
            <h3>{item.name}</h3>
            <div className="todo-btn">
                <i className="far fa-edit add-btn"></i>
                <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(item.id)}></i>
            </div>
        </div>
    )
}

export default ShowItems