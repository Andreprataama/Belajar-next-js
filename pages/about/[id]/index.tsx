import { useRouter } from "next/router"

export default  function User() {
  const router = useRouter()
  console.log(`router`, router)
  return (
    <div>
      <h1>User : {router.query.id}</h1>

    </div>

  )
}