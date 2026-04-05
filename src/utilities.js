const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const priceConvertor = (price) => {
  return intl.format(price);
};
