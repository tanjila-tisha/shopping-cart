import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";
import ShoppingCart from "./ShoppingCart";
import { fetchProductList } from "../data/services";
import { Product, Cart } from "../types";
import { Box, Typography } from "@mui/material";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState<Cart>({});

  const addToCart = (productId: number) => {
    if (productId in cartItems) {
      setCartItems({
        ...cartItems,
        [productId]: cartItems[productId] + 1,
      });
    } else {
      setCartItems({
        ...cartItems,
        [productId]: 1,
      });
    }
  };

  useEffect(() => {
    fetchProductList().then(setProducts);
  }, []);

  return (
    <>
      <Box>
        <Typography
          variant="h1"
          textAlign="center"
          fontSize={{
            sm: 36,
            xs: 18,
            md: 54,
          }}
          sx={{
            paddingBottom: 5,
            paddingTop: 5,
          }}
        >
          Toys Shop
        </Typography>
        <Grid
          container
          columnSpacing={2}
          rowSpacing={6}
          columns={{ xs: 1, sm: 4, md: 12 }}
        >
          {products.map((product: Product, index) => (
            <Grid item xs={1} sm={2} md={4} key={index}>
              <ProductCard product={product} addToCart={addToCart} />
            </Grid>
          ))}
        </Grid>
        <ShoppingCart items={cartItems} products={products} />
      </Box>
    </>
  );
};

export default ProductList;
