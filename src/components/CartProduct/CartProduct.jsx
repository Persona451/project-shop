import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './cartproduct.module.css';
import { addQuantity, deleteProductFromCart, removeQuantity } from '../../redux/cartSlice';

const CartProduct = () => {
    const products = useSelector(state => state.cart.productsCart);
    const dispatch = useDispatch();

    const handleDeleteClick = (productId) => {
        dispatch(deleteProductFromCart(productId));
    };

    const handleMinusBtnClick = (productId, quantity) => {
        dispatch(removeQuantity({ id: productId, quantity }));
    };

    const handlePlusBtnClick = (productId, quantity) => {
        dispatch(addQuantity({ id: productId, quantity }));
    };

    return (
        <div>
            {products.map((product) => {
                return (
                    <article className={styles.wrapper} key={product.id}>
                        <img src={product.img} alt="" className={styles.img} />
                        <p className={styles.name}>{product.title}</p>
                        <p className={styles.price}>{product.price}</p>
                        <div className={styles.quantityWrapper}>
                            <button onClick={() => handleMinusBtnClick(product.id, product.quantity - 1)}>-</button>
                            <p className={styles.quantity}>{product.quantity}</p>
                            <button onClick={() => handlePlusBtnClick(product.id, product.quantity + 1)}>+</button>
                        </div>
                        <p className={styles.subtotal}>{product.quantity * product.price}</p>
                        <button className={styles.deleteBtn} onClick={() => handleDeleteClick(product.id)}>
                            <img src="images/delete-icon.png" alt="" />delete
                        </button>
                    </article>
                );
            })}
        </div>
    );
};

export default CartProduct;
