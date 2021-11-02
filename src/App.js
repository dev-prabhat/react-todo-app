import React from 'react'

function App() {
  let items = [
    {
      id: 1,
      text: "Learn Html and css"
    },
    {
      id: 2,
      text: "Learn JavaSript"
    },
    {
      id: 3,
      text: "Learn React.js"
    }
  ]
  let title = "Things To Do"
  return (
    <div className="container">
      <div className="row">
        <div className="todolist">
          <h1>{title}</h1>
          <ul className="list-unstyled">
            {items.map(item => (
              <li key={item.id} className="ui-state-default">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" value="" />{item.text}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
