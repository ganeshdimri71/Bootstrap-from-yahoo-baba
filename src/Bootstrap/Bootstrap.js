import React, { useEffect, useRef } from "react";

function Bootstrap() {
  return (
    <>
      <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" id="myNavbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
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
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#section1">
                  Section 1
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#section2">
                  Section 2
                </a>
              </li>
              <li class="nav-item">
                <a href="#section3" class="nav-link">
                  Section 3
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#section4">
                      section 4
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#section5">
                      section 5
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="section1" className="container-fluid">
        <h1>Section 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ullam
          nobis commodi reiciendis placeat eaque. Aspernatur vel praesentium
          commodi nulla?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde
          officiis eligendi nisi dolor, voluptatem odio ut! Excepturi, similique
          omnis!
        </p>
      </div>
      <div id="section2" className="container-fluid">
        <h1>Section 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ullam
          nobis commodi reiciendis placeat eaque. Aspernatur vel praesentium
          commodi nulla?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde
          officiis eligendi nisi dolor, voluptatem odio ut! Excepturi, similique
          omnis!
        </p>
      </div>
      <div id="section3" className="container-fluid">
        <h1>Section 3</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ullam
          nobis commodi reiciendis placeat eaque. Aspernatur vel praesentium
          commodi nulla?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde
          officiis eligendi nisi dolor, voluptatem odio ut! Excepturi, similique
          omnis!
        </p>
      </div>
      <div id="section4" className="container-fluid">
        <h1>Section 4</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ullam
          nobis commodi reiciendis placeat eaque. Aspernatur vel praesentium
          commodi nulla?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde
          officiis eligendi nisi dolor, voluptatem odio ut! Excepturi, similique
          omnis!
        </p>
      </div>
      <div id="section5" className="container-fluid">
        <h1>Section 5</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ullam
          nobis commodi reiciendis placeat eaque. Aspernatur vel praesentium
          commodi nulla?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde
          officiis eligendi nisi dolor, voluptatem odio ut! Excepturi, similique
          omnis!
        </p>
      </div>
    </>
  );
}

export default Bootstrap;
