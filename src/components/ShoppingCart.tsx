import React from "react";
import {
  Typography,
  TableContainer,
  Table,
  TableCell,
  TableRow,
  TableBody,
  Box,
} from "@mui/material";
import { Cart, Product } from "../types/index";
import "../index.css";
import { getPrice, getTotal } from "../utils";

interface ShoppingCartProps {
  products: Product[];
  items: Cart;
}

const ShoppingCart = ({ items, products }: ShoppingCartProps) => {
  const total = getTotal(items, products);

  if (!Object.keys(items).length) return null;

  return (
    <Box sx={{ margin: 5 }}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Shopping cart
      </Typography>
      <TableContainer
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Table sx={{ maxWidth: 650 }} aria-label="Shopping cart">
          <TableBody>
            {Object.keys(items).map((id: string) => {
              const product = products.find((p) => p.id === parseInt(id));
              if (!product) return;
              const price = getPrice(product);
              const { image, title } = product;
              return (
                <TableRow key={id}>
                  <TableCell>
                    {<img src={image} width="50" height="50" />}
                  </TableCell>
                  <TableCell>
                    <Typography>{title}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {items[parseInt(id)]} X {price} kr
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell sx={{ border: 0 }} colSpan={3}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    textAlign: "center",
                    paddingTop: 2,
                  }}
                >
                  Total Price: {total} kr
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ShoppingCart;
