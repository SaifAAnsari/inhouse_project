import React from "react";
import "./body.css";

const Body = () => {
  return (
    <>
      <header className="text-center my-5">
        <h1 className="display-4">Welcome to HMS Textile Group</h1>
        <p className="lead">Leading the way in innovative textile solutions</p>
      </header>

      <div className="card-container">
        <div className="card">
          <div className="card-icon">📦</div>
          <h5 className="card-title">WE MANUFACTURE</h5>
          <p className="card-text">
            A wide variety of yarns, fabrics, garments, and home textile products are produced and distributed across the nation.
            {" "}
          </p>
        
        </div>

        <div className="card">
          <div className="card-icon">💻</div>
          <h5 className="card-title">WE DESIGN FABRIC</h5>
          <p className="card-text">
            Knitted and woven fabrics are developed within in-house facilities,
            offering options such as 100% cotton, polyester blends,and other fabric compositions.{" "}
          </p>
        
        </div>

        <div className="card">
          <div className="card-icon">⚙️</div>
          <h5 className="card-title">WE ENGINEER</h5>
          <p className="card-text">
            HMS Textiles Group carries its own, holistic manufacturing units for
            ginning, spinning, knitting, weaving and garmenting processes
            situated in Gorakhpur, Uttar Pradesh.
          </p>
         
        </div>
      </div>
    </>
  );
};

export default Body;
