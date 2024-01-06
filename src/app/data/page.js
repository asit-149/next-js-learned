// 'use client'
// import { useEffect,useState } from "react";
// const Data = () => {
//     const [product, setProduct] = useState([])
//     useEffect(()=>{
//         async function fetchData(){
//             let data = await fetch('https://jsonplaceholder.typicode.com/posts')
//             data = await data.json()
//             // console.log(data)
//             setProduct(data)
//         }
//         fetchData()
//     },[])
//   return (
//     <ul>
//      {product?.map((p) =>(
//         <>
//          <li key={p.id}>{p.title}</li>                                                           
//         </>
//      ))}
//     </ul>
//   )
// }

// export default Data;


// By Server Component

async function fetchData() {
  let data = await fetch('https://jsonplaceholder.typicode.com/posts')
  data = await data.json()
  return data; 
}
 const Data =  async () => {
  let producs = await fetchData()
  console.log(producs)
  return (
    <div>
     {producs?.map((p)=>(
        <p key={p.id}>{p.title}</p>
     ))}
    </div>
  )
}

export default Data
