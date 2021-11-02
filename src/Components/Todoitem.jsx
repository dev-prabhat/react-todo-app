import React from 'react'

const Todoitem = ({item}) =>{
    return(
        <li key={item.id} className="ui-state-default">
        <div className="checkbox">
          <label>
            <input type="checkbox" value="" />{item.text}
          </label>
        </div>
      </li>
    )
}

export default Todoitem