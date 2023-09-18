import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="business-details">
          <h2>Business Name</h2>
          <p>1234 Main Street</p>
          <p>City, State ZIP</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@example.com</p>
        </div>
        <div className="social-media">
          <h3>Connect with Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Business Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
