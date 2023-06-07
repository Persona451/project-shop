import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import styles from "./registerpage.module.css"

const RegisterPage = () => {
    return (
        <div>
            <div className={styles.wrapper}>
                <RegisterForm styles={styles} />
            </div>
        </div>
    );
};

export default RegisterPage;