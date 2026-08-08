const Navbar = ({ setCategory, category }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-white text-dark fs-4">NewsMag</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${category === "general" ? "active" : ""}`}
                onClick={() => setCategory("general")}
              >
                General
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${category === "technology" ? "active" : ""}`}
                onClick={() => setCategory("technology")}
              >
                Technology
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${category === "sports" ? "active" : ""}`}
                onClick={() => setCategory("sports")}
              >
                Sports
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${category === "business" ? "active" : ""}`}
                onClick={() => setCategory("business")}
              >
                Business
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${category === "entertainment" ? "active" : ""}`}
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
