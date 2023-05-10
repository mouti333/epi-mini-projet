import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";
import './style.css'

export default function Product(props) {
  const { id, title, img, price, inCart } = props.product;
  return (
    <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <ProductConsumer>
          {(value) => (
            <div
              className="img-container p-5"
              style={{height:220}}
              onClick={() => value.handleDetail(id)}
            >
              <Link to="/details">
                <img src={img} alt="product" className="card-img-top" />
              </Link>
              <button
                className="cart-btn btn btn-secondary m-1"
                disabled={inCart ? true : false}
                onClick={() => {
                  value.addToCart(id);
                }}
              >
                In Cart
              </button>
            </div>
          )}
        </ProductConsumer>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">TND</span>
            {price}
          </h5>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
