import React from "react";

function App() {
  return (
    <>
      <div className="container mb-4">
        <h2 className="text-center mt-3 mb-5 fs-4">Bootstrap Button Classes</h2>
        <div className="row">
          <div className="col py-3">
            <a href="" className="btn btn-primary">
              Submit
            </a>
            <a href="" className="btn btn-secondary">
              Submit
            </a>
            <a href="" className="btn btn-success">
              Submit
            </a>
            <button type="button" className="btn btn-warning">
              Submit
            </button>
            <a href="" className="btn btn-outline-info">
              Submit
            </a>
            <a href="" className="btn btn-outline-dark">
              Submit
            </a>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="text-center mt-3 mb-5 fs-4">Bootstrap Button Classes</h2>
        <div className="row">
          <div className="col py-3">
            <a href="" className="btn btn-primary btn-lg active">
              Submit
            </a>
            <a href="" className="btn btn-secondary ">
              Submit
            </a>
            <a href="" className="btn btn-success btn-sm">
              Submit
            </a>
            <button type="button" className="btn btn-warning">
              Submit
            </button>
            <a href="" className="btn btn-outline-info">
              Submit
            </a>
            <a href="" className="btn btn-outline-dark">
              Submit
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 py-3">
            <button className="btn btn-primary btn-lg btn-block">Submit</button>
            <a href="" className="btn btn-primary active">
              Submit
            </a>{" "}
            <a href="" className="btn disabled btn-secondary">
              Submit
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
