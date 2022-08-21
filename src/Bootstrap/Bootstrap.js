import React from "react";

function App() {
  return (
    <>
      <div className="container mb-5">
        <h2 className="py-3 text-center">Grouping Card</h2>
        <div className="row py-5">
          <div className="col-6 text-center">
            <div className="spinner-border text-primary  m-5"></div>
          </div>
          <div className="col-6 text-center">
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary  m-5"></div>
            </div>
          </div>
        </div>
        <div className="row py-5 clearfix">
          <div className="col-6 text-center">
            <div className="spinner-border text-primary  m-5 float-start"></div>
          </div>
          <div className="col-6 text-center">
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary  m-5 float-end"></div>
            </div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col">
            <div className="spinner-border text-primary"></div>
            <div className="spinner-border text-success"></div>
            <div className="spinner-border spinner-border-sm text-danger"></div>
            <div
              className="spinner-border  text-info"
              style={{ width: "80px", height: "80px" }}
            ></div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col">
            <div className="spinner-grow text-primary"></div>
            <div className="spinner-grow text-success"></div>
            <div className="spinner-grow spinner-grow-sm text-danger"></div>
            <div
              className="spinner-grow  text-danger"
              style={{ width: "80px", height: "80px" }}
            ></div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col">
            <button className="btn btn-primary disabled">
              <span className="spinner-border spinner-border-sm"></span>
              Loading...
            </button>
            <button className="btn btn-primary disabled">
              <span className="spinner-border spinner-border-sm"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
