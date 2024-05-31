import React, { useContext } from "react";
import { CartFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import ProductContex from "../context/ProductContex";
const Navbar = () => {
  const { cart} = useContext(ProductContex);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand text-light" >
          Shopping Cart
        </Link>
        <button
          className="navbar-toggler bg-warning"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link className="nav-link text-light" aria-current="page" to={'/'}>
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-light" to={'/allproducts'}>
                All Products
              </Link>
            </li>
            <li className="nav-item text-light">
              <Link className="nav-link text-light" to={'/popular'}>
                Popular
              </Link>
            </li>
 
          </ul>
          <form className="d-flex">
            <Link className="btn btn-outline-warning" to={'/cart'} >
              <i className="bi-cart-fill me-1">
                <CartFill />
              </i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {cart.length}
              </span>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
