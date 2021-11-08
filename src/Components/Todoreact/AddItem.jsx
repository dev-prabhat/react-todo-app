import React,{useState,useEffect}from 'react'
import RemoveButton from './RemoveButton'
import ShowItems from './ShowItems'

// get data from local storage
const getLocalData = () =>{
    const lists = localStorage.getItem("mytodolist")
    if(lists){
        return JSON.parse(lists)
    }
    return []
}


const AddItem = () => {
    const [inputdata,setInputData] = useState("")
    const [items, setItem] = useState(getLocalData())

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


    // delete a single item
    const deleteItem = (index) => {
        const updateItems = items.filter((curElem)=>{
            return curElem.id !== index
        })
        setItem(updateItems)
    }

    // delete all items
    const removeAll = () =>{
        setItem([])
    }


    // appending data in the local storage
    useEffect(() => {
        localStorage.setItem("mytodolist",JSON.stringify(items))
    }, [items])

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