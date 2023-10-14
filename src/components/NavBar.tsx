import image1 from "../assets/images/logo.svg";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="navbar12">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="img-fluid" src={image1} />
          </a>
          <div className="d-flex">
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    New
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Popular
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Trending
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Categories
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
