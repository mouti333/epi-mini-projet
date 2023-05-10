import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct } from "./data";
import { Store } from 'react-notifications-component';

const ProductContext = React.createContext();

function ProductProvider(props) {
 
  const [products, setProductes] = useState([]);

  const [detailProducts, setDetailProducts] = useState(detailProduct);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setmodalProduct] = useState(detailProduct);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setProducts();
  }, []);

  const setProducts = () => {
    let products = [];
    storeProducts.forEach((item) => {
      products = [...products, item];
    });
    setProductes(products);

  };

  const getItem = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  };
  const handleDetail = (id) => {
    const product = getItem(id);
    setDetailProducts(product);

  };
  const addToCart = (id) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setProductes([...tempProducts]);
    setCart([...cart, product]);
    setDetailProducts({ ...product });
    addTotals();

    Store.addNotification({
      title: "Great!",
      message: "You added a new product!",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true
      }
    });

  };
  const openModal = (id) => {
    const product = getItem(id);
    setmodalProduct(product);
    setModalOpen(true);

  };
  const closeModal = () => {
    setModalOpen(false);

  };
  const increment = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    setCart([...tempCart]);
    addTotals();
   
  };
  const decrement = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.count * product.price;
      setCart([...tempCart]);
      addTotals();

    }
  };
  const getTotals = () => {

    let subTotal = 0;
    cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    return {
      subTotal,
      tax,
      total,
    };
  };
  const addTotals = () => {
    const totals = getTotals();
    setCartSubTotal(totals.subTotal);
    setCartTax(totals.tax);
    setCartTotal(totals.total);

  };
  const removeItem = (id) => {
    let tempProducts = [...products];
    let tempCart = [...cart];

    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    tempCart = tempCart.filter((item) => {
      return item.id !== id;
    });
    setCart([...tempCart]);
    setProductes([...tempProducts]);
    addTotals();

  };
  const clearCart = () => {
    setCart([]);
    setProducts();
    addTotals();

  };

  return (
    <ProductContext.Provider
      value={{
        cartSubTotal,
        cartTax,
        cartTotal,
        handleDetail: handleDetail,
        addToCart: addToCart,
        openModal: openModal,
        closeModal: closeModal,
        increment: increment,
        decrement: decrement,
        removeItem: removeItem,
        clearCart: clearCart,
        getTotals,
        detailProduct: detailProducts,
        modalProduct,
        products,
        cart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
