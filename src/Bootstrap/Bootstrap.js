import React, { useEffect, useRef } from "react";

function Bootstrap() {
  return (
    <>
      <div className="container mb-4">
        <h2 className="py-3 text-center">Bootstrap Tabs</h2>
        <div className="row py-3 justify-content-center">
          <div className="col">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide carousel-fade mb-3"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleSlidesOnly"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleSlidesOnly"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleSlidesOnly"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-item active" data-bs-interval="2000">
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                    alt="carousel-image"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First Slide Label</h5>
                    <p style={{ background: "white", color: "black" }}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Voluptates est ullam consequatur!
                    </p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                    alt="carousel-image"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First Slide Label</h5>
                    <p style={{ background: "white", color: "black" }}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Voluptates est ullam consequatur!
                    </p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                    alt="carousel-image"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First Slide Label</h5>
                    <p style={{ background: "white", color: "black" }}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Voluptates est ullam consequatur!
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleSlidesOnly"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleSlidesOnly"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <div id="prevBtn">Prev</div>
            <div id="nextBtn">Next</div>
            <div id="pauseBtn">Pause</div>
            <div id="cycleBtn">Cycle</div>
            <button id="oneBtn">1</button>
            <button id="twoBtn">2</button>
            <button id="threeBtn">3</button>
          </div>
        </div>
      </div>
    </>
  );
}


export default Bootstrap;
