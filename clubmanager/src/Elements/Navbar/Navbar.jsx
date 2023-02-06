import React from "react";
import "../Navbar/Navbar.css"
function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary navdiv">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <span>Navbar</span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item mx-lg-3">
                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                <span>Home</span>
              </li>
              <li class="nav-item" >
                {/* <a class="nav-link" href="#">Link</a> */}
                <span >Link</span>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
