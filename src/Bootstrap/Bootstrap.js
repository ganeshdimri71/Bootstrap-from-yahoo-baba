import React from "react";

function App() {
  return (
    <>
      <div className="container mb-4">
        <h2 className="py-3 text-center">Bootstrap Images and Video</h2>
        <div className="row py-3">
          <div className="col-md-4" style={{ border: "4px solid red" }}>
            <img src="src\assets\scenary.jpg" alt="road" />
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">img-fluid</h2>
        <div className="row py-3">
          <div className="col-md-4" style={{ border: "4px solid red" }}>
            <img
              src="src\assets\scenary.jpg"
              className="img-fluid"
              alt="road"
            />
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">img-fluid</h2>
        <div className="row py-3">
          <div className="col-md-4">
            <img
              src="src\assets\scenary.jpg"
              className="img-fluid img-thumbnail"
              alt="road"
            />
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">img-fluid rounded</h2>
        <div className="row py-3">
          <div className="col-md-4">
            <img
              src="src\assets\scenary.jpg"
              className="img-fluid rounded"
              alt="road"
            />
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">img-fluid rounded</h2>
        <div className="row py-3">
          <div className="col-md-4">
            <img
              src="src\assets\scenary.jpg"
              className="img-fluid rounded-lg"
              alt="road"
            />
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">img-fluid rounded-sm</h2>
        <div className="row py-3">
          <div className="col-md-4">
            <img
              src="src\assets\scenary.jpg"
              className="img-fluid rounded-sm"
              alt="road"
            />
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">img-fluid rounded-circle</h2>
        <div className="row py-3">
          <div className="col-md-4">
            <img
              src="src\assets\scenary.jpg"
              className="img-fluid rounded-circle"
              alt="road"
            />
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">rounded-top</h2>
        <div className="row py-3">
          <div className="col-md-4">
            <img
              src="src\assets\scenary.jpg"
              className="img-fluid rounded-top"
              alt="road"
            />
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">rounded-top</h2>
        <div className="row py-3">
          <div className="col-md-4">
            <img
              src="src\assets\scenary.jpg"
              className="img-fluid rounded-bottom"
              alt="road"
            />
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">rounded-top</h2>
        <div className="row py-3">
          <div className="col-md-4">
            <img
              src="src\assets\scenary.jpg"
              className="img-fluid rounded-left"
              alt="road"
            />
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">Image with text</h2>
        <div className="row py-3">
          <div className="col-md-4">
            <figure className="figure">
              <img
                src="src\assets\scenary.jpg"
                className="figure-img img-fluid"
                alt="road"
              />
              <figcaption className="figure-caption">Some text goes here</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">Image with text</h2>
        <div className="row py-3">
          <div className="col-md-4">
            <figure className="figure">
              <img
                src="src\assets\scenary.jpg"
                className="figure-img img-fluid"
                alt="road"
              />
              <figcaption className="figure-caption text-end">Some text goes here</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
