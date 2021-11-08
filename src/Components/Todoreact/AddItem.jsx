import React,{useState}from 'react'

const AddItem = () => {
    const [inputdata,setInputData] = useState("")
    return(
           <div>
                <div className="addImage">
                    <input 
                    type="text" 
                    placeholder="✍ Add Items" className="form-control"
                    value={inputdata}
                    onChange={(e)=>setInputData(e.target.value)}/>

                    <i className="fa fa-plus add-btn"></i>
                </div>
                {/* show our item */}
                <div className="showItmes">
                        <div className="eachItem">
                            <h3>apple</h3>
                        <div className="todo-btn">
                            <i className="far fa-edit add-btn"></i>
                            <i className="far fa-trash-alt add-btn"></i>
                        </div>
                    </div>
                </div>
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All">
                        <span>Check List</span>
                    </button>
                </div>
           </div>
    )
}

export default AddItem