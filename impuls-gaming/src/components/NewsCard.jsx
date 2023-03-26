import { Link } from "react-router-dom";

const NewsCard = ({ handleReadMore }) => {
  return (
    <div className="card news settings-card">
      <div className="news-card card-news">
        <div className="wrapper">
          <div className="header">
            <div className="date">
              <span>12</span>
              <span className="px-1">Aug</span>
              <span>2023</span>
            </div>
            <ul className="menu-content">
              <li>
                <Link className="fa fa-bookmark-o"></Link>
              </li>
              <li>
                <Link className="fa fa-heart-o">
                  <span>1</span>
                </Link>
              </li>
              <li>
                <Link className="fa fa-comment-o">
                  <span>6</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="data">
            <div className="content">
              <span className="text-left d-flex textColor3">
                by Louis Gadza
              </span>
              <h4 className="text-left">
                NEW RELEASE: Call of Duty Modern WareFar 23 Coming out next week
                Moday
              </h4>
              <p className="text text-left">
                The UK regulator, the Competition and Markets Authority (CMA),
                has published an addendum to its provisional findings on
                Microsoft's Activision Blizzard acquisition and has now narrowed
                its scope of concerns
              </p>
              <Link className="button" onClick={handleReadMore}>
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
