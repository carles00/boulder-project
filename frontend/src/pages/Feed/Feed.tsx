import useAuthenticated from "../../hooks/useUserAuthenticated";
import FeedProfile from "./FeedProfile";

export default function Feed(){
  useAuthenticated();

  return(
    <div className="feed">
      <nav className="feed__nav">
        nav
      </nav>
      <FeedProfile className="feed__profile"/>
      <main className="feed__content">
        main
      </main>
    </div>
  )
}