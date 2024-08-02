import React from "react";

function Collections() {
  return (
    <div>
      <div className="collection">
        <div className="card">
          <img src="\assests\images\c1 (1).jpg" className="img-fluid" alt="" />
        </div>
        <div>
          <div id="card2" className="card">
            <img
              src="\assests\images\c1 (2).jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="collecbtn">
            <button id="collectionbtn" className="btn">
              VIEW ALL COLLECTIONS
            </button>
          </div>
        </div>

        <div className="card">
          <img src="\assests\images\c1 (3).jpg" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Collections;
