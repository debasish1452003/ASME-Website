import React from "react";

const Footer = () => {
  return (
    // <div className="dummy">
    <div className="footer bg-dark text-light">
      <div className="footerdivs">
        <div className="footerdiv1 col-lg-4 col-md-5">
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            labore adipisci iusto provident id, sint culpa. Similique recusandae
            rem sapiente minima quos nisi eos numquam error quasi assumenda,
            quis maxime. Eligendi ex totam consectetur esse similique omnis
            aliquid a alias eaque cum. Saepe minus, ab incidunt est consectetur
            a sint ad, itaque debitis ullam exercitationem?
          </p>
          <div className="footerimg">
            <a href="https://www.linkedin.com">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2504/2504923.png"
                alt="LinkedIn"
              />
            </a>
            <a href="https://www.instagram.com">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png"
                alt="Instagram"
              />
            </a>
            <a href="https://www.facebook.com">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2504/2504903.png"
                alt="Facebook"
              />
            </a>
            <a href="https://www.twitter.com">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2504/2504947.png"
                alt="Twitter"
              />
            </a>
          </div>
        </div>

        <div className="footerdiv2 col-lg-4 col-md-5">
          <h4>Connect Us!</h4>

          <div>
            <i class="bi bi-telephone"></i> (Phone) : +91 123456789
          </div>
          <div>
            <i class="bi bi-envelope-at"></i> (Email) : asmenitrkl@nitrkl.ac.in
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            blanditiis exercitationem placeat consectetur. Iusto ipsum
            aspernatur recusandae odit nisi totam fugit assumenda, porro ex sed
            sunt, explicabo tenetur eaque reiciendis magni sit magnam natus!
          </p>
        </div>
        <div className="footerdiv3 col-lg-4 col-md-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          accusantium consectetur tenetur asperiores laudantium? Quae rem in
          fugiat vero eligendi ad veniam obcaecati atque nisi, saepe minus
          totam, soluta voluptatibus.
        </div>
      </div>
      <div className="copyright">
        <p className="text-center">
          All Rights Reserved &copy; ASME NITRKL Student Chapter
        </p>
      </div>
    </div>
    // </div>
  );
};

export default Footer;
