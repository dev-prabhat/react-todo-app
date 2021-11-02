import React,{Component} from 'react'
import Todolist from './Todolist';

class App extends Component {
  constructor(){
    super()
    this.state={
      items : [
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
    }
  }

  addNew(text){
    let nextId = this.state.items.length+1;
    let item = {
      id: nextId,
      text: text
    }

    let updatedList = this.state.items.concat([item])

    this.setState({
      items: updatedList
    })
  }

  render(){
  let title = "Things To Do"
  let items = this.state.items

  return (
    <div className="container">
      <div className="row">
        <Todolist 
        items={items}
        addNew={this.addNew.bind(this)} 
        title={title} />
      </div>
    </div>
  )
  }
  ;
}

export default App;
