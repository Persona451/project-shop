import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartProduct from '../../components/CartProduct/CartProduct';
import styles from './cartpage.module.css';

const CartPage = () => {
  const products = useSelector(state => state.cart.productsCart);

  // Рассчитываем сумму автоматически при изменении количества товаров
  const sum = products.reduce((total, product) => {
    return total + (product.price * product.quantity);
  }, 0);

  return (
    <>
      <section className={styles.cart}>
        <div className={styles.wrapper}>
          <div className={styles.products}>
            <div className={styles.header}>
              <p className={styles.name}></p>
              <p className={styles.name}>Product</p>
              <p className={styles.name}>Price</p>
              <p className={styles.name}>Quantity</p>
              <p className={styles.name}>Subtotal</p>
              <p className={styles.name}></p>
            </div>
            <CartProduct />
          </div>
          <div className={styles.totals}>
            <h3 className={styles.title}>Cart totals</h3>
            <p className={styles.subtotal}>
              Subtotal <span>{sum}</span>
            </p>
            <p className={styles.total}>
              Total <span>{sum}</span>
            </p>
            <Link to="/checkout" className={styles.checkout}>Check Out</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
