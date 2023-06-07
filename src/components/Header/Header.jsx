import React from "react";
import styles from "./header.module.css";
import Modal from "../Modal/Modal";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../redux/cartSlice";
import { logout } from "../../redux/authSlice";

const Header = () => {
    const isOpen = useSelector(state => state.cart.isOpen);
    const dispatch = useDispatch()
    const cartQuantity = useSelector(state => state.cart.quantityCart);
    const userRole = useSelector((state) => state.auth.role);
    const activeClass = ({ isActive }) => {
        return isActive ? `${styles.active} ${styles.link}` : styles.link;
    };

    const handleLogout = () => {
        dispatch(logout());
    };
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    return (
        <>
            <header>
                <div className={styles.wrapper}>
                    <img src="/images/krossbox.png" alt="" className={styles.img} />
                    <nav className={styles.nav}>
                        <NavLink to="/" className={activeClass}>Главная</NavLink>
                        <NavLink to="/catalog" className={activeClass}>Магазин</NavLink>
                        {!isAuthenticated && ( // Render the "Register" button only if the user is not authenticated
                            <NavLink to="/register" className={activeClass}>Зарегистрироваться</NavLink>
                        )}
                        {isAuthenticated && userRole === "admin" && (
                            <NavLink to="/add" className={activeClass}>
                                Добавить продукт
                            </NavLink>
                        )}
                        {isAuthenticated && ( // Always render the "Logout" button
                            <NavLink to="/" className={activeClass} onClick={handleLogout}>
                                Выйти
                            </NavLink>
                        )}
                    </nav>
                    <div className={styles.icons}>
                        <p className={styles.icon}>
                            {cartQuantity > 0 && <span className={styles.quantity}>{cartQuantity}</span>}
                            <img src="/images/bas.png" alt="" className={styles.icon3}
                                onClick={() => {
                                    if (cartQuantity !== 0)
                                        dispatch(openModal())
                                }}
                            />
                        </p>
                    </div>
                    {isOpen && <Modal />}
                </div>
            </header>
        </>
    );
};

export default Header;


