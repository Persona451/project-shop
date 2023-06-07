import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeModal } from "../../redux/cartSlice";
import styles from "./modal.module.css";

const Modal = () => {
  const products = useSelector(state => state.cart.productsCart)
  const dispatch = useDispatch()
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img
          src="/images/black-close-icon-3.png"
          alt=""
          className={styles.close}
          onClick={() => dispatch(closeModal())}
        />
        <h2 className={styles.title}>Корзина с товарами</h2>
        <div className={styles.line}></div>
        <div className={styles.products}>
          {products.map(product => (
            <div key={product.id} className={styles.product}>
              <img src={product.img} alt="" className={styles.img}/>
              <div className={styles.info}>
                <h5 className={styles.name}>{product.title}</h5>
                <p className={styles.quantity}>x Rs. {product.price} X {product.quantity}</p>
              </div>
              <img src="/images/close-icon.png" alt="" />
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <div className={styles.total}>
            <p className={styles.subtotal}>Subtotal:</p>{getTotalPrice(products)} с.
          </div>
          <div className={styles.line}></div>
          <Link to="/cart" className={styles.link} onClick={() => dispatch(closeModal())}>View Cart</Link>
          <Link to="/checkout" className={styles.links} onClick={() => dispatch(closeModal())}>Checkout</Link>
        </div>
      </div>
    </div>
  );
};

function getTotalPrice(products) {
  return products.reduce((acc, product) => Number(acc) + Number(product.price), 0);
}

export default Modal;