export const getPastOrders = async (page) => {
  const response = await fetch(`/api/past-orders?page=${page}`);
  const data = response.json();
  return data;
};
