import React from 'react'
import "./Genre.css"
export default function Genre(props) {
  return (
    <div className='genre-tag w-25 rounded-pill text-center '>{props.text}</div>
  )
}
