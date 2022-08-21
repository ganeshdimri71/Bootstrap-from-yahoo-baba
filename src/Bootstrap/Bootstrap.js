import React from "react";

function App() {
  return (
    <>
      <div className="container mb-5">
        <h2 className="py-3 text-center">Grouping Card</h2>
        <div className="row py-5">
          <div className="col">
            <h1>
              Example heading <span class="badge bg-secondary">New</span>
            </h1>
            <h2>
              Example heading{" "}
              <span class="badge rounded-pill text-bg-primary">New</span>
            </h2>
            <button className="btn btn-primary">
              Notifications <span className="badge text-bg-light">5</span>{" "}
            </button>
            <a href="" className="badge text-decoration-none bg-info">
              Read More
            </a>
            <a
              href=""
              className="badge bg-danger text-decoration-none rounded-pill p-2"
            >
              Read More
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              pariatur nobis perferendis vero vitae quia ipsa consectetur rerum
              perspiciatis span soan{" "}
              <span className="badge text-bg-warning">
                {" "}
                suscipit cumque unde veniam, deserunt{" "}
              </span>{" "}
              quaerat, modi adipisci dolor molestias praesentium necessitatibus
              reprehenderit. Earum, nisi hic ratione ab voluptatibus pariatur
              dignissimos ducimus eligendi totam magnam impedit doloremque.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
