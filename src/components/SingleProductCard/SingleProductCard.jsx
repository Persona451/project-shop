import React, { useState, useEffect } from "react";
import styles from "./singleproductcard.module.css";
import { useNavigate, useParams } from "react-router-dom";
import servicesApi from "../../services/products";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import productService from "../../services/products";
import { TextField, Button } from "@mui/material";

const SingleProductCard = (props) => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescr, setNewDescr] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newImg, setNewImg] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteProduct = () => {
    productService
      .deleteProduct(id)
      .then((res) => {
        console.log(res);
        navigate("/catalog");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEditMode = () => {
    setNewTitle(product.title);
    setNewDescr(product.descr);
    setNewPrice(product.price);
    setNewImg(product.img);
    setEditMode(true);
  };

  const handleEdit = () => {
    const newProduct = {
      title: newTitle,
      descr: newDescr,
      img: newImg,
      price: newPrice,
    };
    productService
      .editProduct(id, newProduct)
      .then((res) => {
        setEditMode(false);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    document.documentElement.scroll({
      top: "0",
      behavior: "smooth",
    });
    servicesApi.getProduct(id).then((res) => {
      setProduct(res.data);
    });
  }, []);

  const date = new Date(product.createdAt);
  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const userRole = useSelector((state) => state.auth.role);
  const isAdmin = userRole === "admin";

  return (
    <div className={styles.card}>
      {editMode ? (
        <div className={styles.form}>
          <h1 className={styles.edit}>Редактирование товара</h1>
          <TextField
            variant="outlined"
            label="img"
            value={newImg}
            onChange={(e) => setNewImg(e.target.value)}
            style={{ width: "20%", marginBottom: "20px" }}
          />
          <TextField
            variant="outlined"
            label="title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            style={{ width: "20%", marginBottom: "20px" }}
          />
          <TextField
            variant="outlined"
            label="descr"
            value={newDescr}
            onChange={(e) => setNewDescr(e.target.value)}
            style={{ width: "20%", marginBottom: "20px" }}
          />
          <TextField
            variant="outlined"
            label="price"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            style={{ width: "20%", marginBottom: "20px" }}
          />
          <Button
            style={{ width: "20%" }}
            variant="contained"
            onClick={handleEdit}
          >
            Contained
          </Button>
        </div>
      ) : (
        <>
          <div className={styles.wrapper}>
            <div className={styles["img-wrapper"]}>
              <img src={product.img} alt="" />
            </div>
            <div className={styles.info}>
              <h1 className={styles.title}>{product.title}</h1>
              <p className={styles.price}>{product.price}</p>
              <p className={styles.descr}>{product.descr}</p>
              <div className={styles["control-wrapper"]}>
                <div className={styles.quantity}>
                  <button
                    className={styles["quantity-control"]}
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    className={styles["quantity-control"]}
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className={styles.add}
                  onClick={() =>
                    dispatch(addToCart({ ...product, quantity }))
                  }
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className={styles.control}>
            {isAdmin && (
              <>
                <button className={styles.delete} onClick={deleteProduct}>
                  Delete
                </button>
                <button className={styles.update} onClick={handleEditMode}>
                  Update
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SingleProductCard;
