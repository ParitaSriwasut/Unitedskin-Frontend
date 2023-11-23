import { useState } from "react";
import axios from "../configs/axios";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import OrderSummary from "../components/order/OrderSummary";
import { useEffect } from "react";

export function OrderSummaryContainer() {
  const [payment, setPayment] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    async function fetchOrderSummary() {
      const response = await axios.get("orders/payment/" + id);
      if (!response.status === 200) {
        throw new Error("Network response was not 200");
      }

      const data = response.data;
      setLoading(false);

      setPayment(data.payment);
    }

    fetchOrderSummary();
  }, [1]);

  if (loading) {
    return <Loading />;
  }

  return OrderSummary({ payment });
}
