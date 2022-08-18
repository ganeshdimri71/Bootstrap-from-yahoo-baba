import React from "react";

function App() {
  return (
    <>
      <div className="container mb-4">
        <div className="row py-2">
          <div className="col-md-12">
            <h1 className="text-center fs-4">Text Formatting lead</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mx-auto pink">
            <h2 className="text-danger">Sub Heading</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea iure
              obcaecati id aliquid saepe voluptatibus incidunt aperiam quidem
              aspernatur repellat.
            </p>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <div className="row py-2">
          <div className="col-md-12">
            <h1 className="text-center fs-4">Unordered List</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ul>
              <li>Orange</li>
              <li>Apple</li>
              <li>Banana</li>
              <li>Grapes</li>
            </ul>
          </div>
          <div className="col-md-4 mx-auto pink">
            <h2 className="text-danger">Sub Heading</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea iure
              obcaecati id aliquid saepe voluptatibus incidunt aperiam quidem
              aspernatur repellat.
            </p>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <div className="row py-2">
          <div className="col-md-12">
            <h1 className="text-center fs-4">Removing Bullets</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li>Orange</li>
              <li>Apple</li>
              <li>Banana</li>
              <li>Grapes</li>
            </ul>
          </div>
          <div className="col-md-4 mx-auto pink">
            <h2 className="text-danger">Sub Heading</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea iure
              obcaecati id aliquid saepe voluptatibus incidunt aperiam quidem
              aspernatur repellat.
            </p>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <div className="row py-2">
          <div className="col-md-12">
            <h1 className="text-center fs-4">Inline list</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">Orange</li>
              <li className="list-inline-item">Apple</li>
              <li className="list-inline-item">Banana</li>
              <li className="list-inline-item">Grapes</li>
            </ul>
          </div>
          <div className="col-md-4 mx-auto pink">
            <h2 className="text-danger">Sub Heading</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea iure
              obcaecati id aliquid saepe voluptatibus incidunt aperiam quidem
              aspernatur repellat.
            </p>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <div className="row py-2">
          <div className="col-md-12">
            <h1 className="text-center fs-4">Inline list</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">Orange</li>
              <li className="list-inline-item">Apple</li>
              <li className="list-inline-item">Banana</li>
              <li className="list-inline-item">Grapes</li>
            </ul>
          </div>
          <div className="col-md-4 mx-auto pink">
            <h2 className="text-danger">Sub Heading</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea iure
              obcaecati id aliquid saepe voluptatibus incidunt aperiam quidem
              aspernatur repellat.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <blockquote className="blockquote">
              <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, deleniti expedita esse nisi totam reiciendis!"</p>
              <footer className="blockquote-footer">Yahoo baba</footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <div className="row py-2">
          <div className="col-md-12">
            <h1 className="text-center fs-4">User Select All</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mx-auto pink">
            <h2 className="text-danger">Sub Heading</h2>
            <p className="lead user-select-all">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea iure
              obcaecati id aliquid saepe voluptatibus incidunt aperiam quidem
              aspernatur repellat.
            </p>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <div className="row py-2">
          <div className="col-md-12">
            <h1 className="text-center fs-4">User Select None</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mx-auto pink">
            <h2 className="text-danger">Sub Heading</h2>
            <p className="lead user-select-none">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea iure
              obcaecati id aliquid saepe voluptatibus incidunt aperiam quidem
              aspernatur repellat.
            </p>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <div className="row py-2">
          <div className="col-md-12">
            <h1 className="text-center fs-4">User Select Auto</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mx-auto pink">
            <h2 className="text-danger">Sub Heading</h2>
            <p className="lead user-select-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea iure
              obcaecati id aliquid saepe voluptatibus incidunt aperiam quidem
              aspernatur repellat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
