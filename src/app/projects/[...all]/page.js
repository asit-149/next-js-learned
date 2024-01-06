'use client'

const All = ({params}) => {
    console.log(params)
  return (
    <div>
      <h1>My projects {params.all}</h1>
      <br/>
      All Routes
      {params.all.map((p)=>(
        <li key={p}>{p}</li>
      ))}
    </div>
  )
}

export default All
