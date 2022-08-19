import React from "react";

function App() {
  return (
    <>
      <div className="container mb-4">
        <h2 className="py-3 text-center">Bootstrap 4 form Classes</h2>
        <div className="row py-3">
          <div className="col-md-6">
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                value="abc@gmail.com"
                className="form-control-plaintext"
                readonly
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" />
              <small className="form-text text-muted">
                Your Password must be 8-20 characters
              </small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
              <label>Country</label>
              <select name="" id="" className="form-control">
                <option value="">India</option>
                <option value="">Pakisthan</option>
                <option value="">Bangladesh</option>
                <option value="">Nepal</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="py-3 text-center">Bootstrap 4 Input Sizes</h2>
        <div className="row py-3">
          <div className="col-md-6">
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control form-control-lg" />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control form-control-default"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                value="abc@gmail.com"
                className="form-control-plaintext"
                readonly
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" />
              <small className="form-text text-muted">
                Your Password must be 8-20 characters
              </small>
            </div>
            <div className="form-group">
              <label>Country</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
              <label>Country</label>
              <select name="" id="" className="form-control">
                <option value="">India</option>
                <option value="">Pakisthan</option>
                <option value="">Bangladesh</option>
                <option value="">Nepal</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="formFile" className="form-label">
                Default file input example
              </label>
              <input className="form-control" type="file" id="formFile" />
            </div>
            <div className="form-group">
              <label htmlFor="customRange1" className="form-label">
                Example range
              </label>
              <input type="range" className="form-range" id="customRange1" />
            </div>
            <div className="form-group">
              <label htmlFor="customRange1" className="form-label">
                Hobbies
              </label>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="sportCheck"
                />
                <label htmlFor="sportCheck" className="form-check-label">
                  Sports
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="bookCheck"
                />
                <label htmlFor="bookCheck" className="form-check-label">
                  Books
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="bookCheck"
                  disabled
                />
                <label htmlFor="bookCheck" className="form-check-label">
                  Books
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="customRange1" className="form-label">
                Gender
              </label>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="maleRadio"
                  name="gender"
                />
                <label htmlFor="maleRadio" className="form-check-label">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="femaleRadio"
                  name="gender"
                />
                <label htmlFor="checkbox" className="form-check-label">
                  Female
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
