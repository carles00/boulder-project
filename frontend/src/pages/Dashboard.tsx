import { useAuth0 } from "@auth0/auth0-react"

export default function Dashboard(){
  const {logout, user} = useAuth0()

  return(
    <>
      <h2>dashboard</h2>
      <div>{user?.sub}</div>
      <button onClick={()=> logout()}>Log out</button>
    </>
  )
}