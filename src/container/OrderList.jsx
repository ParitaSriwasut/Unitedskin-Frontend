import { useState } from "react";
import axios from "../configs/axios";
import OrderList from "../components/order/OrderList";
import Loading from "../components/Loading";
import { useEffect } from "react";

export function OrderListContainer() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      const response = await axios.get("/orders");
      if (!response.status === 200) {
        throw new Error("Network response was not 200");
      }

      const data = response.data;
      setLoading(false);
      setOrders(data.orders);
    }

    fetchOrders();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return OrderList({ orders });
}
