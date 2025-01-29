import "./FeedProfile.css";
import useUser from "../../../lib/userContext/useUser";
import { useAuth0 } from "@auth0/auth0-react";
import useApi from "../../../lib/hooks/useApi";
import { useEffect } from "react";

interface Props {
  className: string;
}

export default function FeedProfile({className}:Props) {
  const { dbUser } = useUser();
  const { user, logout } = useAuth0();
  const {getUser} = useApi()

  useEffect(()=>{
    getUser()
  },[])

  return (
    <div className={className}>
      <aside className="dashboard-profile">
        <div className="profile-picture-container">
          <img src={user?.picture} className="profile-picture" />
        </div>
        <div className="profile-card-container">
          <div className="profile-card">
            <p className="profile-card-username">{dbUser?.username}</p>
            <div className="profile-summary">
              <div>followed</div>
              <div>followers</div>
              <div>boulders</div>
            </div>
          </div>
        </div>
        <div className="profile-aditional">
          <button
            onClick={() => {
              logout();
            }}
          >
            logout
          </button>
        </div>
      </aside>
    </div>
  );
}
