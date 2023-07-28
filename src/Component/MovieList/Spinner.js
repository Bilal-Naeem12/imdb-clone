import React, { Component } from 'react'
import loader from "./black.gif"
export default class Spinner extends Component {
  render() {
    return (
      <div className='container d-flex justify-content-center align-items-center ' style={{height:"20vw"}}><img style={{width:"10%"}} src={loader
    } alt="" /></div>
    )
  }
}
