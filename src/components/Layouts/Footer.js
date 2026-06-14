import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content-img">
        <img src="https://i.postimg.cc/4NWhpNfL/ASME-NITR-Black-Logo-1.png" alt="ASME Logo" />
        <img src="https://i.postimg.cc/ncFDsQJ9/NITR-LOGO-with-SAC-Black-1.png" alt="NIT Rourkela SAC Logo" />
      </div>
      <div className="footerdivs">
        <div className="footerdiv1">
          <div className="footerdiv1-content1">
            <h4>ASME NITR Chapter</h4>
            <p>Club under Technical Society, SAC NIT Rourkela</p>
            <p>ME-112, Old Mechanical Building, NIT Rourkela</p>
            <p>Odisha, Pin-751003</p>
          </div>
          <div className="footerdiv1-content2">
            <h4>Connect</h4>
            <p>
              <i className="bi bi-telephone"></i> +91 123456789
            </p>
            <p>
              <i className="bi bi-envelope-at"></i> asmenitrkl@nitrkl.ac.in
            </p>
          </div>
        </div>
        <div className="footerdiv2">
          <h5>Follow us</h5>
          <div className="footerimg">
            <a href="https://www.linkedin.com/in/asme-nit-rourkela-student-chapter-16736988" aria-label="LinkedIn">
              <i className="bil bi-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/asme.nitrkl?igsh=MXZtODZqYjBkN3VidA==" aria-label="Instagram">
              <i className="bii bi-instagram"></i>
            </a>
            <a href="https://www.facebook.com" aria-label="Facebook">
              <i className="bif bi-facebook"></i>
            </a>
            <a href="https://www.twitter.com" aria-label="Twitter">
              <i className="bit bi-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright &copy; ASME NITRKL Student Chapter</p>
        <p>National Institute of Technology Rourkela</p>
      </div>
    </footer>
  );
};

export default Footer;
