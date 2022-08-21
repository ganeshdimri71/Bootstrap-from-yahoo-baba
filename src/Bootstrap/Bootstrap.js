import React from "react";

function App() {
  return (
    <>
      <div className="container mb-5">
        <h2 className="py-3 text-center">Grouping Card</h2>
        <div className="row py-5">
          <div className="col">
            <h5>HTML</h5>
            <div className="progress mb-2">
              <div className="progress-bar" style={{ width: "25%" }}>
                25%
              </div>
              <div className="progress-bar bg-danger" style={{ width: "15%" }}>
                15%
              </div>
              <div className="progress-bar bg-info" style={{ width: "18%" }}>
                18%
              </div>
            </div>
            <h5>Web Designing</h5>
            <div className="progress mb-2" style={{ height: "20px" }}>
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                style={{ width: "50%" }}
              >
                50%
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
