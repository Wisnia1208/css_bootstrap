import React from "react";

const Bootstrap1 = () => {
  return (
    <div className="container animated-container show">
      <h2>Bootstrap Page 1</h2>
      <button className="btn btn-primary btn-custom">Click Me!</button>

      <div className="card mt-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card Subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="card-link">
            Card Link
          </a>
          <a href="#" className="card-link">
            Another Link
          </a>
        </div>
      </div>

      <ul className="list-group mt-3">
        <li className="list-group-item">Item 1</li>
        <li className="list-group-item">Item 2</li>
        <li className="list-group-item">Item 3</li>
        <li className="list-group-item">Item 4</li>
      </ul>
    </div>
  );
};

export default Bootstrap1;
