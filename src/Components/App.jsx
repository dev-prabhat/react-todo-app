import React from 'react'
import Todolist from './Todolist';

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
    },
    {
      id: 4,
      text: "Learn Node.js"
    }
  ]
  let title = "Things To Do"

  return (
    <div className="container">
      <div className="row">
        <Todolist items={items} title={title} />
      </div>
    </div>
  );
}

export default App;
