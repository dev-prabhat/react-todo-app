import React from 'react'
const KeyCode = require('keycode-js');
class InputBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value: this.props.value || ""
        }
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }
    
    handleKeyUp(e){
        if(e.keyCode === KeyCode.KEY_RETURN){
            // console.log(e)
        }
    }

    render(){
        return(
            <input type="text" 
            className="form-control add-todo"
            onKeyUp={this.handleKeyUp.bind(this)}
            onChange={this.handleChange.bind(this)}
            placeholder="Add New"/>
        )
    }
    
}

export default InputBox