
const page = () => {
    console.log(process.env.MONGO_URL)
    console.log(process.env.JWT_SECRET)
  return (
    <div>
      {process.env.MONGO_URL?(
        <h1>DB Successfully Connected</h1>
      ):(
        <h1>DB not Connected</h1>
      )}
    </div>
  )
}

export default page
