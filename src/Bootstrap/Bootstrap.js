import React, { useEffect, useRef } from "react";

function Bootstrap() {
  return (
    <>
      <div className="container mb-4">
        <h2 className="py-3 text-center">Bootstrap Tabs</h2>
        <div className="row py-3 justify-content-center">
          <div className="col-md-4">
            <button id="showBtn" className="btn btn-primary">
              Show
            </button>
            <button id="closeBtn" className="btn btn-danger">
              Close
            </button>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", top: "20px", right: "20px" }}>
        {/* <div id="myToast" className="toast show mb-2" data-bs-autohide="false" */}
        <div id="myToast" className="toast show mb-2" data-bs-delay="3000"
        >
          <div className="toast-header">
            <img
              width="20px"
              src="src\assets\scenary.jpg"
              className="rounded me-2"
              alt=""
            />
            <b className="me-auto">Bootstrap Toast</b>
            <small className="text-muted">1 sec ago</small>
            <button className="close ms-2" data-bs-dismiss="toast">
              <span>&times;</span>
            </button>
          </div>
          <div className="toast-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            soluta!
          </div>
        </div>
        <div className="toast show">
          <div className="toast-header">
            <img
              width="20px"
              src="src\assets\scenary.jpg"
              className="rounded me-2"
              alt=""
            />
            <b className="me-auto">Bootstrap Toast</b>
            <small className="text-muted">1 sec ago</small>
            <button className="close ms-2" data-bs-dismiss="toast">
              <span>&times;</span>
            </button>
          </div>
          <div className="toast-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            soluta!
          </div>
        </div>
      </div>
    </>
  );
}

export default Bootstrap;
