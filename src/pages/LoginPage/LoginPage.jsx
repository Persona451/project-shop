import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './loginpage.module.css'

const LoginPage = () => {
    return (
        <div>
            <div className={styles.wrapper}>
                <LoginForm styles={styles}  />
            </div>
        </div>
    );
};

export default LoginPage;