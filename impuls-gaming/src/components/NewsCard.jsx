import { Link } from "react-router-dom";

const NewsCard = () => {
  return (
    <div className="card news settings-card">
      <div className="news-card card-news">
        <div className="wrapper">
          <div className="header">
            <div className="date">
              <span>12</span>
              <span className="px-1">Aug</span>
              <span>2016</span>
            </div>
            <ul className="menu-content">
              <li>
                <Link className="fa fa-bookmark-o"></Link>
              </li>
              <li>
                <Link className="fa fa-heart-o">
                  <span>18</span>
                </Link>
              </li>
              <li>
                <Link className="fa fa-comment-o">
                  <span>3</span>
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
                Stranger Things: The sound of the Upside Down
              </h4>
              <p className="text text-left">
                The antsy bingers of Netflix will eagerly anticipate the digital
                release of the Survive soundtrack, out today.
              </p>
              <Link className="button">Read more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
