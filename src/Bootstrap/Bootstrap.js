import React, { useEffect, useRef } from "react";

function Bootstrap() {
  return (
    <>
      <div className="container mb-4">
        <h2 className="py-3 text-center">Bootstrap Modal</h2>
        <div className="row py-3 justify-content-center">
          <div className="col-md-7">
            <button
              className="btn btn-primary mb-2"
              data-bs-toggle="collapse"
              data-bs-target=".multi-collapse"
            >
              Click
            </button>
            <a
              href=""
              className="btn btn-success"
              data-bs-toggle="collapse"
              data-bs-target=".multi-collapse"
            >
              Anchor Click
            </a>
            <div className="collapse multi-collapse mb-2">
              <div className="card card-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                alias veniam est laudantium facilis! Temporibus tempora expedita
                nihil atque maxime.
              </div>
            </div>
            <div className="collapse multi-collapse">
              <div className="card card-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                alias veniam est laudantium facilis! Temporibus tempora expedita
                nihil atque maxime.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">Bootstrap Accordian</h2>
        <div className="row py-3 justify-content-center">
          <div className="col-md-7">
            <div className="accordion" id="accordianExample">
              <div className="card">
                <div className="card-header">
                  <button
                    className="btn col-12 btn-link text-start mb-2"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    Heading Number One
                  </button>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show mb-2"
                  data-bs-parent="#accordianExample"
                >
                  <div className="card-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat alias veniam est laudantium facilis! Temporibus
                    tempora expedita nihil atque maxime.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <button
                    className="btn col-12  btn-link text-start mb-2 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                  >
                    Heading Number Two
                  </button>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse mb-2"
                  data-bs-parent="#accordianExample"
                >
                  <div className="card-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat alias veniam est laudantium facilis! Temporibus
                    tempora expedita nihil atque maxime.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <button
                    className="btn btn-block col-12  text-start collapsed mb-2"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                  >
                    Heading Number Two
                  </button>
                </div>
                <div
                  id="collapseThree"
                  className="collapse mb-2"
                  data-bs-parent="#accordianExample"
                >
                  <div className="card-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat alias veniam est laudantium facilis! Temporibus
                    tempora expedita nihil atque maxime.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">Bootstrap Modal</h2>
        <div className="row py-3 justify-content-center">
          <div className="col-md-7 py-3">
            <button id='newBtn' className="btn btn-primary mb-2">Open</button>
            <button id='closeBtn' className="btn btn-primary mb-2">Close</button>
            <div id='newCollapse' className="collapse">
              <div className="card card-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                alias veniam est laudantium facilis! Temporibus tempora expedita
                nihil atque maxime.
              </div>
            </div>
          </div>
     
        </div>
      </div>
    </>
  );
}

export default Bootstrap;
