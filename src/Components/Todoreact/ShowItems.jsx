import React from 'react'

const ShowItems = ({item}) => {
    return(
        <div className="eachItem">
            <h3>{item}</h3>
            <div className="todo-btn">
                <i className="far fa-edit add-btn"></i>
                <i className="far fa-trash-alt add-btn"></i>
            </div>
        </div>
    )
}

export default ShowItems