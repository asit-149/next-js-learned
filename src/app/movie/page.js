'use client'
import { Roboto } from "next/font/google";
const roboto = Roboto({subsets:['latin'],weight:'500'})
export default function Movie() {
  return (
    <>
      {/* <button onClick={()=>{alert('You clicked Me')}}>Click Me</button> 
      */}
         <section>
          <h1>google font</h1>
          <h2 className={roboto.className}>hello this is Roboto fonts</h2>
         </section>
    </>
  )
}
