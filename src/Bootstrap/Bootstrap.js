import React, { useEffect, useRef } from "react";

function Bootstrap() {
  return (
    <>
      <div className="container mb-4">
        <h2 className="py-3 text-center">Bootstrap Modal</h2>
        <div className="row py-3 justify-content-center">
          <div className="col-md-3">
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              Launch Modal
            </button>
            <button className="btn btn-success" id="showBtn">Click</button>
            <div className="modal " id="myModal">
              {/* <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"> */}
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" tabIndex='-1'>
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Modal Title</h5>
                    {/* <button className="close" data-bs-dismiss="modal">
                      <span>&times;</span>
                    </button> */}
                    <button className="close" id='closeModal'>
                      <span>&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6">Col A</div>
                        <div className="col-md-6">Col B</div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, harum rerum. Distinctio ipsum in explicabo. Minima alias in amet perferendis!</div>
                        <div className="col-md-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, quos alias dolor harum quisquam ex obcaecati placeat natus necessitatibus totam.</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-danger" data-bs-dismiss="modal">
                      Close
                    </button>
                    <button className="btn btn-primary">Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bootstrap;
