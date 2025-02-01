import useUser from "../../lib/userContext/useUser"

export default function Profile() {
  const {isLoaded} = useUser();

  
  return (
    <div className="grid h-screen bg-slate-50">
      hola!
    </div>
  )
}
