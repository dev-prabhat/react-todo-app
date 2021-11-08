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
    const [updateItem, setUpdateItem] = useState()
    const [toggleButton, setToggleButton] = useState(false)

    const addItem = () =>{
        if(!inputdata){
            alert("Please fill the required field")
        }
        else if(inputdata && toggleButton){
          setItem(
              items.map((curElem)=>{
                  if(curElem.id === updateItem){
                      return{...curElem,name:inputdata}
                  }
                  return curElem
              })
          )
        setInputData("")
        setUpdateItem(null)
        setToggleButton(false)
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

    // edit the item
    const editItem = (index) =>{
        const edited_item = items.find((curElem)=>{
            return curElem.id === index
        })

        setInputData(edited_item.name)
        setUpdateItem(index)
        setToggleButton(true)
    }


    // delete a single item
    const deleteItem = (index) => {
        const updatedItems = items.filter((curElem)=>{
            return curElem.id !== index
        })
        setItem(updatedItems)
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
                    
                    {toggleButton? <i className="fa fa-edit add-btn" onClick={addItem}></i>:
                    <i className="fa fa-plus add-btn" onClick={addItem}></i>}
                </div>
                <br/>
                {/* show our item */}
                <div className="showItmes">
                        {
                            items.map((item) => <ShowItems item={item} key={item.id} deleteItem={deleteItem} editItem={editItem}/>)
                        }
                </div>
                <RemoveButton removeAll={removeAll}/>
           </div>
    )
}

export default AddItem