import React from "react";

function App() {
  return (
    <>
      <div className="container mb-4">
        <h2 className="py-3 text-center">
          embed-responsive embed-responsive-16by9
        </h2>
        <div className="row py-3">
          <div className="col-md-4">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/r3LiyKA4gqs"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">
          embed-responsive embed-responsive-21by9
        </h2>
        <div className="row py-3">
          <div className="col-md-4">
            <div className="embed-responsive embed-responsive-4by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/r3LiyKA4gqs"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">
          embed-responsive embed-responsive-21by9
        </h2>
        <div className="row py-3">
          <div className="col-md-4">
            <div className="embed-responsive embed-responsive-21by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/r3LiyKA4gqs"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">
          embed-responsive embed-responsive-1by1
        </h2>
        <div className="row py-3">
          <div className="col-md-4">
            <div className="embed-responsive embed-responsive-1by1">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/r3LiyKA4gqs"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
