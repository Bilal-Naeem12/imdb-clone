import React from 'react'
import "./Detail.css"
export default function Feature({Key,Value}) {
  return (


    <div className='  d-flex  feature'>
        
        <div className='key'>
        {Key.toString().toUpperCase() } :
        </div>
       
        
        <div className='value'>
        {Value}
        </div>
        
        </div>
  )
}
