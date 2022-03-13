import React from "react";
import { Link } from "react-router-dom";
const SingUp = () => {
    return(
 <div>
      <Link
        to="/signup"
        type="button"
        className="btn btn-outline-dark  ms-2 "
        data-bs-toggle="modal"
        data-bs-target="#singModal"
      >
        <i className="fa fa-sign-in me-1"></i> Register
      </Link>
      <div
        className="modal fade"
        id="singModal"
        tabIndex="-1"
        aria-labelledby="signupModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="signupModal">
              Register
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <button className="btn  btn-outline-dark w-100 mb-4"> <span className="fa fa-google me-4"></span>Sign up with Google</button>
              <button className="btn  btn-outline-dark w-100 mb-2"> <span className="fa fa-facebook me-4"></span>Sign up with Facebook</button>
              <form>
              <form class="row g-3">
  <div class="col-md-12">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Repeat Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
 
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-outline-dark w-100">Sign in</button>
  </div>
</form>
              
              </form>
            </div>
          </div>
        </div>
      </div>
 </div>
    )
}

export default SingUp