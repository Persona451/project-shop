import React from 'react';
import styles from './breadcrumbs.module.css'

const Breadcrumbs = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>CrossBox</h1>
            <p className={styles.descr}>Спортивные, повседневные и универсальные обуви</p>
        </div>
    );
};

export default Breadcrumbs;