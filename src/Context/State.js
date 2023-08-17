import React, {useState} from 'react'
import Context from './Context'
const State = (props) =>{
   

    const [status, setstatus] = useState({
        "footer" : true,
        display : false,
    })

 const update = (e)=>{
    setstatus({
        footer : e
    })
 }




  return (
 <Context.Provider value={{status,update,setstatus}}>


    {props.children}
 </Context.Provider>
  )
}
export default State 