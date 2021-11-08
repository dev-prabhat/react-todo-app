import React from 'react'

const RemoveButton = ({removeAll}) => {
    return(
        <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                        <span>Check List</span>
                    </button>
        </div>
    )
}

export default RemoveButton