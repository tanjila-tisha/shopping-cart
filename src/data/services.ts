export const fetchProductList = async () => {
  try {
    const response = await fetch("../../../api/products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Unable to fetch data", error);
  }
};
