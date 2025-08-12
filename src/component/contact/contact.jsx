// import React, { useState } from 'react';
// import './contact.css'; 

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [notification, setNotification] = useState({
//     message: '',
//     type: '' 
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:3001/usermsg', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const result = await response.json();
//       console.log('Success:', result);
      
//       setNotification({
//         message: 'Your message has been delivered successfully!',
//         type: 'success'
//       });

//       setFormData({
//         name: '',
//         email: '',
//         message: ''
//       });

//     } catch (error) {
//       console.error('Error:', error);
      
//       setNotification({
//         message: 'There was an error delivering your message. Please try again.',
//         type: 'error'
//       });
//     }
//   };

//   return (
//     <div className="container">
//       <section className="my-5">
//         <h2 className="section-title">Contact Us</h2>
        
//         {/* Notification message at the top */}
//         {notification.message && (
//           <div className={`notification ${notification.type}`}>
//             {notification.message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               placeholder="Enter your name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="message" className="form-label">Message</label>
//             <textarea
//               className="form-control"
//               id="message"
//               rows="4"
//               placeholder="Enter your message"
//               value={formData.message}
//               onChange={handleChange}
//             ></textarea>
//           </div>
//           <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default Contact;


// contact.jsx
import './contact.css';
import { FaUserTie, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <section className="contact-section">
        <h2 className="section-title">GET IN TOUCH WITH US</h2>
        <p className="section-subtitle">We'd love to hear from you</p>

        <div className="contact-cards-container">
          {/* Founder Card */}
          <div className="contact-card">
            <div className="card-icon">
              <FaUserTie className="icon" />
            </div>
            <h5 className="contact-role">Founder</h5>
            <h4 className="contact-name">Rasool Ahmad</h4>
            <div className="contact-info">
              <p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hmstextilesgkp2018@gmail.com"
                  className="info-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope className="info-icon" /> hmstextilesgkp2018@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+919956354444" className="info-link">
                  <FaPhone className="info-icon" /> +91 9956354444
                </a>
              </p>
            </div>
            <a
              href="https://wa.me/919956354444"
              className="contact-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="whatsapp-icon" /> Connect on WhatsApp
            </a>
          </div>

          {/* Manager Card */}
          <div className="contact-card">
            <div className="card-icon">
              <FaUserTie className="icon" />
            </div>
            <h5 className="contact-role">Co-founder</h5>
            <h4 className="contact-name">Saif Ahmad Ansari</h4>
            <div className="contact-info">
              <p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=saif81761@gmail.com"
                  className="info-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope className="info-icon" /> saif81761@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+917309172222" className="info-link">
                  <FaPhone className="info-icon" /> +91 7309172222
                </a>
              </p>
            </div>
            <a
              href="https://wa.me/917309172222"
              className="contact-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="whatsapp-icon" /> Connect on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
