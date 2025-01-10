import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"
import { AuthTest } from "../api/Users"

export default function Dashboard(){
  const {logout, user, getAccessTokenSilently} = useAuth0()
  
  useEffect(() => {
    test();
  },[])

  const test = async () => {
    let token = await getAccessTokenSilently()
    await AuthTest(token);
  }

  return(
    <>
      <h2>dashboard</h2>
      <div>{user?.sub}</div>
      <button onClick={()=> logout()}>Log out</button>
    </>
  )
}