import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="contact-content" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px' }}>
            <h1 className="display-4 mb-4 text-dark">Contact Us</h1>
            <p className="lead text-muted">Have questions or feedback? We'd love to hear from you!</p>
            <p className="text-muted">We're here to assist you with any inquiries you may have about plant care, gardening tips, or using our website. Feel free to reach out to us via the contact form below or through our email address.</p>
            <p className="text-muted">Please allow us some time to respond to your message, as we strive to provide thorough and helpful assistance to each inquiry we receive.</p>
            <h2 className="text-dark">Email Addresses:</h2>
            <ul>
              <li><a href="mailto:2211CS010264@mallareddyuniversity.ac.in" className="text-muted">2211CS010264@mallareddyuniversity.ac.in</a></li>
              <li><a href="mailto:2211CS010192@mallareddyuniversity.ac.in" className="text-muted">2211CS010192@mallareddyuniversity.ac.in</a></li>
              <li><a href="mailto:2211CS010244@mallareddyuniversity.ac.in" className="text-muted">2211CS010244@mallareddyuniversity.ac.in</a></li>
              <li><a href="mailto:2211CS010715@mallareddyuniversity.ac.in" className="text-muted">2211CS010715@mallareddyuniversity.ac.in</a></li>
              {/* Add more email addresses if needed */}
            </ul>
          </div>
        </div>
      </div>
      {/* Add your contact form component or additional contact information here */}
    </div>
  );
};

export default Contact;
