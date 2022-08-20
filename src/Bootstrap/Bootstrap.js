import React from "react";

function App() {
  return (
    <>
      <div className="container mb-4">
        <h2 className="py-3 text-center">Bootstrap Nav Classes</h2>
        <div className="row py-3">
          <div className="col">
            <ul className="nav">
              <li className="nav-item">
                <a href="" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">Services</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">Contact Us</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">Gallery</a>
              </li>
            </ul>
           </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">Bootstrap Nav Classes Active Disabled styling</h2>
        <div className="row py-3">
          <div className="col">
            <ul className="nav">
              <li className="nav-item">
                <a href="" className="nav-link active">Home</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">Services</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">Contact Us</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link disabled">Gallery</a>
              </li>
            </ul>
           </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">Bootstrap Nav Classes Active Disabled</h2>
        <div className="row py-3">
          <div className="col">
            <nav className="nav">
            <a href="" className="nav-link">Home</a>
            <a href="" className="nav-link active">About Us</a>
            <a href="" className="nav-link">Gallery</a>
            <a href="" className="nav-link">Blogs</a>
            <a href="" className="nav-link">Contact Us</a>
            </nav>
           </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">Bootstrap Nav Classes Center align</h2>
        <div className="row py-5">
          <div className="col">
            <nav className="nav justify-content-center">
            <a href="" className="nav-link">Home</a>
            <a href="" className="nav-link active">About Us</a>
            <a href="" className="nav-link">Gallery</a>
            <a href="" className="nav-link">Blogs</a>
            <a href="" className="nav-link">Contact Us</a>
            </nav>
           </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">Bootstrap Nav Classes right align</h2>
        <div className="row py-5">
          <div className="col">
            <nav className="nav justify-content-end">
            <a href="" className="nav-link">Home</a>
            <a href="" className="nav-link active">About Us</a>
            <a href="" className="nav-link">Gallery</a>
            <a href="" className="nav-link">Blogs</a>
            <a href="" className="nav-link">Contact Us</a>
            </nav>
           </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">Bootstrap Nav Classes Menu Vertical</h2>
        <div className="row py-5">
          <div className="col">
            <nav className="nav flex-column">
            <a href="" className="nav-link">Home</a>
            <a href="" className="nav-link active">About Us</a>
            <a href="" className="nav-link">Gallery</a>
            <a href="" className="nav-link">Blogs</a>
            <a href="" className="nav-link">Contact Us</a>
            </nav>
           </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">Bootstrap Nav Classes Nav Pills</h2>
        <div className="row py-5">
          <div className="col">
            <ul className="nav nav-pills">
            <a href="" className="nav-link">Home</a>
            <a href="" className="nav-link active">About Us</a>
            <a href="" className="nav-link">Gallery</a>
            <a href="" className="nav-link">Blogs</a>
            <a href="" className="nav-link">Contact Us</a>
            </ul>
           </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">Bootstrap Nav Classes Nav Pills And Nav Fills</h2>
        <div className="row py-5">
          <div className="col">
            <ul className="nav nav-pills nav-fill">
            <a href="" className="nav-link">Home</a>
            <a href="" className="nav-link active">About Us</a>
            <a href="" className="nav-link">Gallery</a>
            <a href="" className="nav-link">Blogs</a>
            <a href="" className="nav-link">Contact Us</a>
            </ul>
           </div>
        </div>
      </div>
    </>
  );
}

export default App;
