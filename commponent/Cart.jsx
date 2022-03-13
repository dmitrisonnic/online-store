import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delCart } from "../redux/action/index";
import { Link } from "react-router-dom";
const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delCart(item));
  };
  const cartItems = (cartItam) => {
    return (
      <div key={cartItam.id}>
        <div className="container py-5">
          <div className="px-4 my-5 bg-light rounded-3">
            <div className="container py-4">
              <button
                onClick={() => handleClose(cartItam)}
                className="btn-close float-end"
                aria-label="close"
              ></button>
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <img
                    src={cartItam.image}
                    alt={cartItam.title}
                    height="200px"
                    width="200px"
                  />
                </div>
                <div className="col-md-4">
                  <h3>{cartItam.title}</h3>
                  <p className="load fw-bold">${cartItam.price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const emptyCart = () => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3">
          <div className="container py-4">
            <div className="row">
              <h1 className="load text-center">Empty Cart</h1>
            </div>
          </div>
        </div>
      </>
    );
  };

  const button =() => {
    return(
      <>
      <div className="container">
        <div className="row">
        <Link
        to="/checkout"
        
        className="btn btn-outline-dark    w-25 mx-auto"
      
      >
       confirm your order
      </Link>
          </div></div>
      </>
    )
  }
  return (
    <>
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
      {state.length === 0 && emptyCart()}
    </>
  );
};

export default Cart;
