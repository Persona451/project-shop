import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import styles from "./addproductform.module.css"
import Button from "@mui/material/Button";

const AddProductForm = () => {
    const [title, setTitle] = useState('');
    const [descr, setDescr] = useState('');
    const [price, setPrice] = useState(0);
    const [categories, setCategories] = useState([]);
    const [image, setImage] = useState(null);

    const addProduct = (e) => {
        e.preventDefault();
        const newProduct = {
            title,
            descr,
            price,
            categories,
            img: image || "",
            createdAt: new Date().toISOString() // Устанавливаем текущую дату и время
        };

        axios.post("http://localhost:3001/products", newProduct)
            .then(res => {
                console.log(res);
                setTitle('');
                setDescr('');
                setPrice(0);
                setCategories([]);
                setImage(null);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <section className={styles.wrapper}>
            <form onSubmit={addProduct} className={styles.form}>
            <h1 className={styles.title}>Добавить новый товар</h1>
                <TextField
                    label="Название товара"
                    variant="outlined"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    style={{ width: "70%"}}
                />
                <TextField
                    label="Описание"
                    variant="outlined"
                    value={descr}
                    onChange={e => setDescr(e.target.value)}
                    style={{ marginTop: "20px", width: "70%" }}
                />
                <TextField
                    label="Цена"
                    variant="outlined"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    style={{ marginTop: "20px", width: "70%" }}
                />
                <TextField
                    label="Категории"
                    variant="outlined"
                    value={categories.join(",")}
                    onChange={e => setCategories(e.target.value.split(","))}
                    style={{ marginTop: "20px", width: "70%" }}
                />
                <input className={styles.link_img} type="text" value={image} onChange={e => setImage(e.target.value)} placeholder="Ссылка на картинку" />
                <Button
                    type="submit"
                    style={{ fontSize: "18px", borderRadius: "20px", backgroundColor: "rgb(110, 223, 195)", marginTop: "20px" }}
                >
                    Добавить товар
                </Button>
            </form>
        </section>
    );
};

export default AddProductForm;