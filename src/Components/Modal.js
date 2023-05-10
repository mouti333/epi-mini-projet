import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import './style.css'

export default function Modal() {
  return (
    <ProductConsumer>
      {(value) => {
        const { modalOpen, closeModal } = value;
        const { img, title, price } = value.modalProduct;
        if (!modalOpen) {
          return null;
        } else {
          return (
            <div className="modal">
              <div className="container">
                <div className="row">
                  <div
                    id="modal"
                    className="col-8 mx-auto col-md-6 col-lg-4 text-capitalize text-center p-5"
                  >
                    <h5>item added to the cart</h5>
                    <img src={img} className="img-fluid" alt="product" />
                    <h5>{title}</h5>
                    <h5 className="text-muted">price : TND {price}</h5>
                    <Link to="/">
                      <ButtonContainer onClick={() => closeModal()}>
                        continue shoping
                      </ButtonContainer>
                    </Link>
                    <Link to="/cart">
                      <ButtonContainer cart onClick={() => closeModal()}>
                        go to cart
                      </ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }}
    </ProductConsumer>
  );
}

