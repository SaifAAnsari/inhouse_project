import React, { useState } from 'react';
import './product.css';
import ReactModal from 'react-modal';
import jungleImage from '../assets/jungle_print.jpeg';
import polyesterImage from '../assets/polyster.jpeg';
import pvImage from '../assets/pv.jpeg';


ReactModal.setAppElement('#root');

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
      {
    title: 'Jungle Print',
    img: jungleImage,
    description: 'Crafted from 100% premium cotton (200 GSM) with digital printing technology, our jungle print fabric showcases vibrant, high-definition patterns with exceptional color fastness (rated 4-5 on the gray scale). The pre-shrunk base material ensures minimal shrinkage (<3%) while maintaining softness through multiple washes. The fabric features a slight mechanical stretch (15% crosswise) for better comfort and movement. Treated with eco-friendly antimicrobial finish, it resists odor-causing bacteria. Perfect for resort wear, children\'s clothing, and summer collections where bold prints and comfort are equally important.',
  },
  {
    title: 'Polyester Suiting',
    img: polyesterImage,
    description: 'Engineered from 100% high-tenacity polyester microfibers, this suiting fabric offers exceptional durability with a lightweight feel (180 GSM). The tightly woven construction provides excellent shape retention and resistance to stretching, making garments look newer for longer. Features include UV protection (UPF 50+), quick-drying properties (dries 2x faster than cotton), and inherent stain resistance. The fabric undergoes special anti-static treatment and has a smooth hand feel that prevents clinging. Ideal for uniforms, travel wear, and everyday professional attire where low maintenance and long wearability are priorities.',
  },
  {
    title: 'PV Suiting',
    img: pvImage,
    description: 'Our premium PV (Poly-Viscose) suiting fabric combines 65% polyester and 35% viscose to deliver the perfect balance between durability and comfort. The fabric features a luxurious drape with excellent wrinkle resistance, maintaining a crisp appearance throughout the day. With a thread count of 120, it offers superior breathability while being resistant to pilling and shrinkage. The moisture-wicking properties make it ideal for all-season wear, and the color retention ensures long-lasting vibrancy even after multiple washes. Perfect for business suits, formal trousers, and office wear collections.',
  }

];

  const openImageModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container my-5">
      <h2 className="product-section-title">Our Products</h2>

      {products.map((product, index) => (
        <div className={`product-row ${index % 2 === 1 ? 'reverse-row' : ''}`} key={index}>
          <div className="product-image" onClick={() => openImageModal(product.img)}>
            <img src={product.img} alt={product.title} />
            <div className="image-overlay"></div>
          </div>
          <div className="product-description">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        </div>
      ))}

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeImageModal}
        className="image-modal"
        overlayClassName="image-modal-overlay"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {selectedImage && (
            <img src={selectedImage} alt="Enlarged view" className="enlarged-image" />
          )}
          <button className="close-button" onClick={closeImageModal}>
            &times;
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default Product;