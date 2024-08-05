const product = () => {
    return (
      <div className="container">
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
        
      </div>
    );
  }
  
  export default product;