import { useAuth0 } from "@auth0/auth0-react"
import useUser from "../lib/userContext/useUser"

export default function Dashboard(){
  const {logout} = useAuth0()
  const {user} = useUser();
  return(
    <>
      <h2>dashboard</h2>
      <div>{user?.email}</div>
      <button onClick={()=> logout()}>Log out</button>
    </>
  )
}