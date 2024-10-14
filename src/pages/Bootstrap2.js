import React from "react";

const Bootstrap2 = () => {
  return (
    <div className="container animated-container show">
      <h2>Bootstrap Page 2</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-success btn-custom">
          Submit
        </button>
      </form>

      <h3 className="mt-4">Additional Buttons</h3>
      <button className="btn btn-danger">Danger</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-info">Info</button>
    </div>
  );
};

export default Bootstrap2;
