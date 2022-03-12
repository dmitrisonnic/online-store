import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="container pt-6 mt-6">
        <div className="row">
          <div className="col-md-6">
            <h1 className="tetx-primary fw-bold mb-6">About Us</h1>
            <p className="load mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              atque iste, dolore aliquam ex aspernatur minus corporis enim
              aliquid quos, doloribus aperiam! Repellendus minus nemo modi
              adipisci ad, blanditiis et aut veniam rem porro quidem soluta
              officia obcaecati laborum ratione, quae nostrum nobis atque iste
              recusandae libero voluptatem ipsam! Sequi at nobis, repudiandae
              consectetur magnam impedit odit velit maiores quo ut. Numquam illo
              mollitia repellendus, quo autem debitis tempora eius maiores
              commodi, nulla nemo optio accusamus sunt porro, aspernatur error!
              Ab facere debitis, dolorem voluptatem dignissimos eaque
              voluptatibus! Et nisi id rem dolor a doloribus consectetur
              exercitationem soluta, ullam sapiente?
            </p>
            <Link
        to="/contact"
        type="button"
        className="btn btn-outline-dark  ms-2 "
      
      >
        <i class="fa fa-address-book" aria-hidden="true"></i> Contact us
      </Link>
          </div>
          <div className="col-md-6 d-flex justify-content-countet-center">
              <img src="https://www.peoplecube.ai/assets/img/about-us.png" alt="about us" width='600px' height='600px' /></div>
        </div>
      </div>
    </>
  );
};
export default About;
