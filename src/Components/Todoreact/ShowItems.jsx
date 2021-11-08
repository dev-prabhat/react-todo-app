import React from 'react'

const ShowItems = ({item ,deleteItem , editItem}) => {
    const {id,name} = item
    return(
        <div className="eachItem">
            <h3>{name}</h3>
            <div className="todo-btn">
                <i className="far fa-edit add-btn" onClick={()=>editItem(id)}></i>
                <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(id)}></i>
            </div>
        </div>
    )
}

export default ShowItems