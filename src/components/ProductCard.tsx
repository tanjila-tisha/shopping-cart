import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { Product } from "../types";
import "../index.css";
import ExpandMore from "./ExpandMore";
import { Box } from "@mui/system";

interface ProductCardProps {
  product: Product;
  addToCart: (id: number) => void;
}

const ProductCard = ({ product, addToCart }: ProductCardProps) => {
  const { id, title, description, image, regularPrice, salesPrice } = product;
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        title={title}
        height="250"
      />
      <CardHeader title={title} />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
      <span onClick={handleExpandClick} className="more">
        See information
      </span>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          {salesPrice && (
            <Typography className="sales-price">{salesPrice} kr</Typography>
          )}
          <Typography
            className={salesPrice ? "discount-price" : "regular-price"}
          >
            <span>{regularPrice} kr</span>
          </Typography>
        </Stack>
      </CardContent>
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="outlined"
          sx={{ marginBottom: 5 }}
          onClick={() => addToCart(id)}
        >
          Add to cart
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
