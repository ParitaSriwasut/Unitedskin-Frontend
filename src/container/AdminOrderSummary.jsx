import { useState } from "react";
import axios from "../configs/axios";
import Loading from "../components/Loading";
import AdminOrderSummary from "../components/order/AdminOrderSummary";
import { useEffect } from "react";

export function AdminOrderSummaryContainer() {
  const [payments, setPayments] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [loading, setLoading] = useState(true);

  const fetchOrderSummary = async (status = "all") => {
    setLoading(true);
    const response = await axios.get("/orders/payments?status=" + status);
    if (!response.status === 200) {
      throw new Error("Network response was not correct 200");
    }

    const data = response.data;
    setLoading(false);

    setPayments(data.payments);
    setFilterStatus(status);
  };

  useEffect(() => {
    fetchOrderSummary(filterStatus);
  }, [filterStatus]);

  const handleStatusChange = async (id, status) => {
    setLoading(true);
    const response = await axios.patch("/orders/" + id, {
      status,
    });
    if (!response.status === 200) {
      throw new Error("Network response was not correct 200");
    }

    fetchOrderSummary(filterStatus);
  };

  const handleFilterChange = async (status) => {
    setFilterStatus(status);
  };

  if (loading) {
    return <Loading />;
  }

  const totalOrders = payments.reduce(
    (acc, payment) => acc + payment.order.length,
    0
  );
  const totalRevenue = payments.reduce(
    (acc, payment) =>
      acc +
      Number(
        payment.order.reduce((acc, order) => acc + Number(order.totalAmount), 0)
      ),
    0
  );

  return AdminOrderSummary({
    payments,
    filterStatus,
    handleStatusChange,
    handleFilterChange,
    totalOrders,
    totalRevenue,
  });
}
