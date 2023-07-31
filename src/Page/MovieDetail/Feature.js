import React from 'react'
import "./Detail.css"
export default function Feature({Key,Value}) {
  return (


    <div className=' gap-5 d-flex  feature'>
        
        <span className='key'>
        {Key.toString().toUpperCase() } :
        </span>
       
        
        <span className='value'>
        {Value}
        </span>
        
        </div>
  )
}
