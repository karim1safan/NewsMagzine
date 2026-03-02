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
              <div
                className={`nav-link ${category === "general" ? "active" : ""}`}
                onClick={() => setCategory("general")}
                style={{ cursor: "pointer" }}
              >
                General
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${category === "technology" ? "active" : ""}`}
                onClick={() => setCategory("technology")}
                style={{ cursor: "pointer" }}
              >
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${category === "sports" ? "active" : ""}`}
                onClick={() => setCategory("sports")}
                style={{ cursor: "pointer" }}
              >
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${category === "business" ? "active" : ""}`}
                onClick={() => setCategory("business")}
                style={{ cursor: "pointer" }}
              >
                Business
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link ${category === "entertainment" ? "active" : ""}`}
                onClick={() => setCategory("entertainment")}
                style={{ cursor: "pointer" }}
              >
                Entertainment
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
