import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center py-6 my-6">
            <h1>Have a Quastion?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8tXsyTU-TP6AGULHol0Z3i2aRPITEe0tBg&usqp=CAU"
              alt=""
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                full Name
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Dmitri Sonnic"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Dima@googlemail.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Your questions?
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <Link
        to="/contact"
        type="button"
        className="btn btn-outline-dark  ms-2 "
      
      >
        <i class="fa fa-envelope" aria-hidden="true"></i> Send Message
      </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
