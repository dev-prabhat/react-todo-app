import React,{useState}from 'react'
import ShowItems from './ShowItems'



const AddItem = () => {
    const [inputdata,setInputData] = useState("")
    const [items, setItem] = useState([])

    const addItem = () =>{
        if(!inputdata){
            alert("Please fill the required field")
        }
        else{
            setItem([...items,inputdata])
        }
    }

    
    return(
           <div>
                <div className="addImage">
                    <input 
                    type="text" 
                    placeholder="✍ Add Items" className="form-control"
                    value={inputdata}
                    onChange={(e)=>setInputData(e.target.value)}/>

                    <i className="fa fa-plus add-btn" onClick={addItem}></i>
                </div>
                {/* show our item */}
                <div className="showItmes">
                        {
                            items.map((item,index) => <ShowItems item={item} key={index}/>)
                        }
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