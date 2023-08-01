import React, { useContext, useEffect } from 'react'
import Context from '../Context/Context'
export default function Footer() {

const a = useContext(Context)
useEffect(()=>{
console.log("MA FOOTER HU " + a.status.footer)
},[])
  return ( a.status.footer &&
<footer className='text-center py-5'>© IMDB 1999. All Rights Reserved.</footer>
  )
}
