import React, { useEffect, useRef } from "react";

function Bootstrap() {
  return (
    <>
      <div className="container mb-4">
        <h2 className="py-3 text-center">Bootstrap Alerts</h2>
        <div className="row py-3 justify-content-center">
          <div className="col-md-7">
            <div id="redbox" className="alert alert-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              deserunt!
            </div>
          </div>
          <div className="col-md-7">
            <div className="alert alert-success">
              Lorem ipsum dolor sit{" "}
              <a className="alert-link" href="">
                Lorem ipsum dolor sit.
              </a>{" "}
              amet consectetur adipisicing elit. Possimus, deserunt!
            </div>
          </div>
          <div className="col-md-7">
            <div className="alert alert-danger">
              <h3 className="alert-heading">Heading Goes Here</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eveniet necessitatibus illum dolor recusandae atque deserunt
                aliquam, nemo provident hic vero, aut totam unde repellendus
                nulla quas adipisci expedita culpa voluptas id doloremque magnam
                saepe placeat? Sit assumenda ipsum harum voluptatibus nihil!
                Eos, quae nisi laborum accusamus inventore, velit facere eius
                omnis nostrum optio magnam cum iure voluptates, natus molestias
                sapiente ea animi modi beatae quia quibusdam consequatur dicta!
                Quas, officiis quos, ut est libero ad consectetur nesciunt
                molestiae doloribus inventore autem natus enim eum ex voluptate
                debitis eos. Deleniti repellat expedita tempore sequi ipsum
                consequatur voluptatibus rem velit dignissimos placeat.
              </p>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto in natus est esse possimus doloribus a blanditiis
                alias, hic sequi.
              </p>
            </div>
          </div>
          <div className="col-md-7">
            <div className="alert alert-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              deserunt!
              <button data-bs-dismiss="alert">
                <span>&times;</span>
              </button>
            </div>
            <button className="btn btn-danger" id="closebtn">
              Close
            </button>
          </div>
          {/* <button id="closebtn" onClick={() => alert.close()}> */}
        </div>
      </div>
    </>
  );
}

export default Bootstrap;
