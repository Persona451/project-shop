import React from 'react';
import styles from './checkout.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { resetCart } from '../../redux/cartSlice';

const cardStyle = {
  style: {
    base: {
      color: "black",
      fontSize: "24px",
      "::placeholder": {
        color: "black"
      }
    }
  }
}

const CheckoutForm = () => {
  const sum = useSelector(state => state.cart.sum);
  const products = useSelector(state => state.cart.productsCart);
  const stripe = useStripe()
  const elements = useElements()
  const dispatch = useDispatch()
  const [clientSecret, setClienSecret] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    axios.post("https://whispering-river-87788.herokuapp.com/api/create-payment-intent", {
      total: sum
    })
      .then(res => setClienSecret(res.data.clientSecret))
  }, [])

  const pay = (e) => {
    e.preventDefault()
    stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    })
    .then (res => {
      if (res.error) {
        alert(res.error.message)
      } else {
        alert("Ваша оплата прошла успешно")
        dispatch(resetCart())
        navigate("/catalog")
      }
      console.log(res)
    })
  }

  return (
    <>
      <div className={styles.wrapper}>
      <form className={styles.card} onSubmit={pay}>
          <div>
            <CardElement options={cardStyle} />
          </div>
          <button type='submit'>Pay</button>
        </form>
        <div className={styles["product-wrapper"]}>
          <p className={styles["product-title"]}> Product  <span>Subtotal</span> </p>
          {products.map((product) => (
            <div>
              <p className={styles["product-name"]}>{product.title} - {product.price} X {product.quantity}<span>{product.price * product.quantity}</span> </p>
            </div>
          ))}
          <p className={styles["product-total"]}> Total <span>{sum}</span> </p>
        </div>
       
      </div>
    </>
  );
};

export default CheckoutForm;