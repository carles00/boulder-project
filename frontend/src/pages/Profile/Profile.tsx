import useUser from "../../context/userContext/useUser";

export default function Profile() {
  const { user } = useUser();

  return (
    <main className="col-start-2">
      <img src={user?.picture} className="profile-picture" />
      {user?.username}
    </main>
  );
}
