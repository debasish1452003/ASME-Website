import React from "react";

const Footer = () => {
  return (
    // <div className="dummy">

    <div className="footer">
      <div className="footer-content-img">
        <img
          src="https://i.postimg.cc/4NWhpNfL/ASME-NITR-Black-Logo-1.png"
          alt="ASME Logo"
        />
        <img
          src="https://i.postimg.cc/ncFDsQJ9/NITR-LOGO-with-SAC-Black-1.png
"
          alt="SAC Logo"
        />
      </div>
      <div className="footerdivs pt-6 col-lg-12 ">
        <div className="footerdiv1 col-lg-8 mt-5">
          <div className="footerdiv1-content1 col-lg-6">
            {/* <div className="footer-content-img">
              <img
                src="https://i.postimg.cc/4NWhpNfL/ASME-NITR-Black-Logo-1.png"
                alt="ASME Logo"
              />
              <img
                src="https://i.postimg.cc/ncFDsQJ9/NITR-LOGO-with-SAC-Black-1.png
"
                alt="SAC Logo"
              />
            </div> */}
            <div className="footer-content mt-1 text-center">
              <h4>ASME NITR Chapter</h4>
              <p>Club Under Tehcnical Societyk, SAC NIT Rourkela</p>

              <p>ME-112, Old Mechanical Building, NIT Rourkela</p>
              <p>ODISHA, Pin-751003</p>
            </div>
          </div>
          <div className="footerdiv1-content2 col-lg-6 text-center">
            <h4>Connect Us!</h4>

            <div>
              <i class="bi bi-telephone"></i> (Phone) : +91 123456789 cd{" "}
            </div>
            <div>
              <i class="bi bi-envelope-at"></i> (Email) :
              asmenitrkl@nitrkl.ac.in
            </div>
          </div>
        </div>
        <div className="footerdiv2 col-lg-4 text-center mt-5">
          <h5>FOLLOW US</h5>
          <div className="footerimg">
            <a href="https://www.linkedin.com/in/asme-nit-rourkela-student-chapter-16736988">
              {/* <img
                src="https://cdn-icons-png.flaticon.com/128/2504/2504923.png"
                alt="LinkedIn"
              /> */}
              <i className="bil bi-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/asme.nitrkl?igsh=MXZtODZqYjBkN3VidA==">
              {/* <img
                src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png"
                alt="Instagram"
              /> */}
              <i className="bii bi-instagram"></i>
            </a>
            <a href="https://www.facebook.com">
              {/* <img
                src="https://cdn-icons-png.flaticon.com/128/2504/2504903.png"
                alt="Facebook"
              /> */}
              <i className="bif bi-facebook"></i>
            </a>
            <a href="https://www.twitter.com">
              {/* <img
                src="https://cdn-icons-png.flaticon.com/128/2504/2504947.png"
                alt="Twitter"
              /> */}
              <i className="bit bi-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="text-center mb-1">
          Copyright &copy; ASME NITRKL Student Chapter
        </p>
        <p className="text-center">NATIONAL INSTITUTE OF TECHNOLOGY ROURKELA</p>
      </div>
    </div>
  );
};

export default Footer;
