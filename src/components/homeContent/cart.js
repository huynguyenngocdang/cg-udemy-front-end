import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { removeFromCart } from '../../slice';
import { useDispatch } from 'react-redux';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items);
  const countProductInCart = cart.length;
  const totalPrice = useSelector((state) => state.cart.total);

  return (
    <section className="vh-100" style={{ backgroundColor: "#fdccbc" }}>
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <p>
              <span className="h2">Shopping Cart </span>
              <span className="h4">({countProductInCart} item in your cart)</span>
            </p>
            <h2>Your Cart</h2>
            {cart?.map((product, index) => (
              <><MDBCard key={index} className="mb-4">
                <MDBCardBody className="p-4">
                  <MDBRow className="align-items-center">
                    <MDBCol md="2">
                      <MDBCardImage
                        fluid
                        src={product.video}
                        alt="Generic placeholder image" />
                    </MDBCol>
                    <MDBCol md="2" className="d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Name</p>
                        <p className="lead fw-normal mb-0">{product.name}</p>
                      </div>
                    </MDBCol>
                    <MDBCol md="2" className="d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Color</p>
                        <p className="lead fw-normal mb-0">
                          <MDBIcon
                            fas
                            icon="circle me-2"
                            style={{ color: "#fdd8d2" }} />
                          pink rose
                        </p>
                      </div>
                    </MDBCol>
                    <MDBCol md="2" className="d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Price</p>
                        <p className="lead fw-normal mb-0">{product.price}</p>
                      </div>
                    </MDBCol>
                    <MDBCol md="2" className="d-flex justify-content-center">
                      <div>
                        <p className="small text-muted mb-4 pb-2">Delete</p>
                        <button onClick={() => dispatch(removeFromCart(product))} className="lead fw-normal mb-0">Yes</button>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard></>
            ))}
            <h2>Total price: {totalPrice}</h2>
            <div className="d-flex justify-content-end">
              <MDBBtn color="light" size="lg" className="me-2">
                Continue shopping
              </MDBBtn>
              <MDBBtn size="lg"><Link to={`/confirmation`}>Confirm Order</Link></MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default Cart
