import React, { useState } from 'react';
import styles from './filter.module.css'

const Filter = (props) => {
    
    return (
        <div className={styles.filter}>
            <div className={styles.wrapper}>
                <div className={styles["icon-wrapper"]}>
                    <img src="/images/filter-icon.png" alt="" />
                    <p className={styles["filter-text"]}>Filter</p>
                    <img src="/images/grid-view-icon.png"
                        alt="" 
                        onClick={() => props.setGridView(true)}
                    />
                    <img src="/images/list-view-icon.png" 
                        alt=""
                        onClick={() => props.setGridView(false)}
                    />
                </div>
                <div className={styles.controls}>
                    <p>
                        Sort by 
                        <select onChange={e => props.setSorted(e.target.value)}value={props.sorted}>
                            <option value="newestAsc">NewestAsc</option>
                            <option value="priceAsc">PriceAsc</option>
                            <option value="priceDesc">PriceDesc</option>
                            <option value="newestDesc">NewestDesc</option>
                        </select>
                    </p>    
                </div>    
            </div>
        </div>
    );
};

export default Filter;