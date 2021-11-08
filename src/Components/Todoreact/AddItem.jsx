import React,{useState}from 'react'
import RemoveButton from './RemoveButton'
import ShowItems from './ShowItems'



const AddItem = () => {
    const [inputdata,setInputData] = useState("")
    const [items, setItem] = useState([])

    const addItem = () =>{
        if(!inputdata){
            alert("Please fill the required field")
        }
        else{
            const newInputData={
                id:new Date().getTime().toString(),
                name:inputdata
            }
            setItem([...items,newInputData])
            setInputData("")
        }
    }

    const deleteItem = (index) => {
        const updateItems = items.filter((curElem)=>{
            return curElem.id !== index
        })
        setItem(updateItems)
    }

    const removeAll = () =>{
        setItem([])
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
                            items.map((item) => <ShowItems item={item} key={item.id} deleteItem={deleteItem}/>)
                        }
                </div>
                <RemoveButton removeAll={removeAll}/>
           </div>
    )
}

export default AddItem