import React from 'react';
import './body.css';

const Body = () => {
  return (
    <div className="container">
      <header className="text-center my-5">
        <h1 className="display-4">Welcome to Our Textile Group</h1>
        <p className="lead">Leading the way in innovative textile solutions</p>
      </header>
      
      <section className="my-5">
        <h2 className="section-title">About Us</h2>
        <p className="section-text">
          Our textile group has been a pioneer in the industry, providing high-quality fabrics and materials 
          for various applications. With a commitment to sustainability and innovation, we aim to deliver 
          the best products to our customers worldwide.
        </p>
      </section>

      <section className="my-5">
        <h2 className="section-title">Our Products</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <img src="https://images.pexels.com/photos/6045280/pexels-photo-6045280.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Product 1" className="img-fluid rounded shadow" />
            <h3 className="mt-2">High-quality cotton fabric</h3>
            {/* <p className="text-muted">High-quality cotton fabric</p> */}
          </div>
          <div className="col-md-4 mb-4">
            <img src="https://images.pexels.com/photos/6276068/pexels-photo-6276068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Product 2" className="img-fluid rounded shadow" />
            <h3 className="mt-2">Durable polyester fabric</h3>
            {/* <p className="text-muted">Durable polyester fabric</p> */}
          </div>
          <div className="col-md-4 mb-4">
            <img src="https://images.pexels.com/photos/6485437/pexels-photo-6485437.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Product 3" className="img-fluid rounded shadow" />
            <h3 className="mt-2">Durable linen fabric</h3>
            {/* <p className="text-muted">Durable linenfabric</p> */}
          </div>
        </div>
      </section>

      <section className="my-5">
        <h2 className="section-title">Contact Us</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Body;
