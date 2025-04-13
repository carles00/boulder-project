import useUser from "../../context/userContext/useUser";
import { useNavigate } from "react-router";

interface Props {
  className: string;
}

export default function FeedProfile({className}:Props) {
  const navigate = useNavigate()
  const { user, logOut } = useUser();

  return (
    <div className={className}>
      <aside className="dashboard-profile">
        <div className="profile-picture-container">
          <img src={user?.image!} className="profile-picture" />
        </div>
        <div className="profile-card-container">
          <div className="profile-card">
            <p className="profile-card-username">{user?.name!}</p>
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
              logOut();
            }}
          >
            logout
          </button>
        </div>
      </aside>
    </div>
  );
}
