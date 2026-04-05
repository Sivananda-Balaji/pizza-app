import { useEffect, useState } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);
  useEffect(() => {
    const fetchPizzaOfTheDay = async () => {
      const response = await fetch("/api/pizza-of-the-day");
      const data = await response.json();
      setPizzaOfTheDay(data);
    };
    fetchPizzaOfTheDay();
  }, []);
  return pizzaOfTheDay;
};
