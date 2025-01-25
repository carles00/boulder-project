import "./Feed.css"
import FeedProfile from "./FeedProfile/FeedProfile";

export default function Feed(){
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