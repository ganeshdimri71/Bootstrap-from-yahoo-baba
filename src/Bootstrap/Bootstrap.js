import React from "react";
import {FiFacebook} from 'react-icons/fi'


function App() {
  return (
    <>
      <div className="container mb-4">
        <h2 className="text-center mt-3 mb-5 fs-4">Bootstrap Button Classes</h2>
        <div className="row">
          <div className="col py-3">
            <div className="btn-group">
              <button className="btn btn-primary" type="button">
                Click
              </button>
              <button className="btn btn-primary" type="button">
                Click
              </button>
              <button className="btn btn-primary" type="button">
                Click
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="text-center mt-3 mb-5 fs-4">Bootstrap Button Classes</h2>
        <div className="row">
          <div className="col py-3">
            <div className="btn-group">
              <button className="btn btn-primary" type="button">
                Click
              </button>
              <button className="btn btn-success" type="button">
                Click
              </button>
              <button className="btn btn-danger" type="button">
                Click
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="text-center mt-3 mb-5 fs-4">
          Bootstrap Button Classes Sizes
        </h2>
        <div className="row">
          <div className="col py-3">
            <div className="btn-group-lg">
              <button className="btn btn-primary" type="button">
                Click
              </button>
              <button className="btn btn-success" type="button">
                Click
              </button>
              <button className="btn btn-danger" type="button">
                Click
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="text-center mt-3 mb-5 fs-4">
          Bootstrap Button Classes Small
        </h2>
        <div className="row">
          <div className="col py-3">
            <div className="btn-group-sm">
              <button className="btn btn-primary" type="button">
                Click
              </button>
              <button className="btn btn-success" type="button">
                Click
              </button>
              <button className="btn btn-danger" type="button">
                Click
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="text-center mt-3 mb-5 fs-4">
          Bootstrap Button Classes Normal Size
        </h2>
        <div className="row">
          <div className="col py-3">
            <div className="btn-group">
              <button className="btn btn-primary" type="button">
                Click
              </button>
              <button className="btn btn-success" type="button">
                Click
              </button>
              <button className="btn btn-danger" type="button">
                Click
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="text-center mt-3 mb-5 fs-4">Bootstrap Button Toolbar</h2>
        <div className="row">
          <div className="col py-3">
            <div className="btn-group-vertical">
              <button className="btn btn-primary" type="button">
                Click
              </button>
              <button className="btn btn-success" type="button">
                Click
              </button>
              <button className="btn btn-danger" type="button">
                Click
              </button>
              <button className="btn btn-info" type="button">
                Click
              </button>
              <button className="btn btn-warning" type="button">
                Click
              </button>
              <button className="btn btn-light" type="button">
                Click
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="text-center mt-3 mb-5 fs-4">
          Bootstrap Button Toolbar Font-awesome Icon
        </h2>
        <div className="row">
          <div className="col py-3">
            <div className="btn-toolbar">
              <div className="btn-group me-3">
                <button className="btn btn-primary" type="button">
                  Click
                </button>
                <button className="btn btn-success" type="button">
                  Click
                </button>
                <button className="btn btn-danger" type="button">
                  Click
                </button>
                <button className="btn btn-info" type="button">
                  Click
                </button>
                <button className="btn btn-warning" type="button">
                  Click
                </button>
                <button className="btn btn-light" type="button">
                  Click
                </button>
              </div>
              <div className="btn-group">
                <button className="btn btn-primary" type="button">
                  Click
                </button>
                <button className="btn btn-success" type="button">
                  Click
                </button>
                <button className="btn btn-danger" type="button">
                  Click
                </button>
                <button className="btn btn-info" type="button">
                  Click
                </button>
                <button className="btn btn-warning" type="button">
                  Click
                </button>
                <button className="btn btn-light" type="button">
                  Click
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="text-center mt-3 mb-5 fs-4">Bootstrap Button Toolbar</h2>
        <div className="row">
          <div className="col py-3">
              <div className="btn-group">
                <button className="btn btn-primary" type="button">
                  Click
                </button>
                <button className="btn btn-success" type="button">
                  Click
                </button>
              <div className="btn-group">
                <a href="" className="btn btn-danger dropdown-toggle" data-toggle="dropdown">Click</a>
                <div className="dropdown-menu">
                  <a href="" className="dropdown-item">Web Design</a>
                  <a href="" className="dropdown-item">Web Development</a>
                </div>
            </div>
              </div>
              <div className="btn-group">
                <button className="btn btn-primary" type="button">
                  <FiFacebook />
                </button>
                <button className="btn btn-success" type="button">
                  <FiFacebook />
                </button>
                <button className="btn btn-danger" type="button">
                  <FiFacebook />
                </button>
                <button className="btn btn-info" type="button">
                  <FiFacebook />
                </button>
                <button className="btn btn-warning" type="button">
                  <FiFacebook />
                </button>
                <button className="btn btn-light" type="button">
                  <FiFacebook />
                </button>
              </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
