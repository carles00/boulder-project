import useUser from "../lib/userContext/useUser"

export default function Dashboard(){
  const {user} = useUser();
  return(
    <>
      <h2>dashboard</h2>
      <p>{user?.name}</p>
    </>
  )
}