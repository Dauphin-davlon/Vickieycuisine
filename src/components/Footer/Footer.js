import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="business-details">
          <h2>Vickiey's cuisine</h2>
          <p>155 University Ave</p>
          <p>Newark, NJ 07102</p>
          <p>Phone: (908) 398-0649</p> 
          <p>Email: info@example.com</p>
        </div>
        <div className="social-media">
          <h3>Connect with Us</h3>
          <ul>

            <li><a href="https://www.instagram.com/vickieycuisine/?igshid=MzRlODBiNWFlZA%3D%3D">Instagram</a></li>
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






//<li><a href="https://www.instagram.com/vickieycuisine/?igshid=MzRlODBiNWFlZA%3D%3D">Facebook</a></li>
//<li><a href="https://www.instagram.com/vickieycuisine/?igshid=MzRlODBiNWFlZA%3D%3D">Twitter</a></li>
