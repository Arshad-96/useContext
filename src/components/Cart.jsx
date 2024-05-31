import React, { useContext } from "react";
import ProductContex from "../context/ProductContex";
import LoadingDots from "./LoadingDots";
import CartItem from "./CartItem";

const Cart = () => {
    const { cart, loading, price } = useContext(ProductContex);

    return (
        <div className="container-fluid overflow-hidden" >
            <div className="row justify-content-center mt-4" >
                <div className="h2 m-0 mt-4 ms-5">Shopping Cart</div>
                <div className="col-md-9" style={{backgroundColor:'none'}}>
                    <div className="container">
                        
                       
                        {loading ? (
                                <LoadingDots />
                            ) : cart.length > 0 ? (
                                cart.map((item, index) => <CartItem product={item} key={index} />)
                            ) : (
                                <p className="h6 m-0 mt-4 ms-5">No items in the cart</p>
                            )}
                        
                    </div>
                </div>

                <div className="col-md-3  d-sm-flex justify-content-sm-center align-self-sm-start" >
                    
                    <div className="card  mt-2 pt-2" style={{ maxWidth: '18rem'}}>
                        <div className="card-header  text-center">Sub Total</div>
                        <div className="card-body">
                        <h5 className="card-title text-center">${price.toFixed(2)}</h5>
                            <div className="col-12 text-center">
                            <button className="btn btn-warning px-lg-5 " >Proceed To Pay</button>
                            </div>
                            <p className="card-text mt-2">Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up).</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
