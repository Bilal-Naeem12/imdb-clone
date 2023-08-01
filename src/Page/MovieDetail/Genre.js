import React from 'react'
import "./Genre.css"
export default function Genre(props) {
  return (
    <div className='genre-tag  rounded-pill text-center '>{props.text}</div>
  )
}
