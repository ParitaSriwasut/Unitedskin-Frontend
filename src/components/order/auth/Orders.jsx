import React, { useState } from "react";
import Modal from "../../Modal";
import { HiMiniIdentification, HiMiniEye } from "react-icons/hi2";

export default function Orders() {
  // const { usersOder } = useOder();
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return (
      <Modal onClose={() => setIsOpen(false)}>
        <div>
          {usersOder
            ? usersOder.map((el) =>
                el.userId ? (
                  <div key={el.id}>
                    <h1>ORDER ID</h1>
                    <img src={el.productId} alt="product" />
                    <h1>{el.userId}</h1>
                    <h1>{el.paymentId}</h1>
                    <h1>{el.productId}</h1>
                    <h1>{el.totalAmount}</h1>
                    <h1>{el.createdAt}</h1>
                    <h1>{el.updatedAt}</h1>
                    <h1>{el.quantity}</h1>
                    <h1>{el.status}</h1>
                  </div>
                ) : null
              )
            : null}
        </div>
      </Modal>
    );
  }

  return (
    <div className="bg-white flex justify-center items-start h-screen">
      <div className="w-[800px] w-[1024px] flex flex-col items-center p-4 rounded-lg gap-4 mt-20 bg-white w-[800px]">
        <h1 className="w-[220px] text-center bg-primary-400 text-white py-2 rounded-xl font-semibold">
          Your orders
        </h1>
        <div>
          {order.map((el) => (
            <div
              key={el.id}
              className="flex items-center justify-between w-[900px] gap-12 py-6 px-8 shadow-xl rounded-lg"
            >
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="text-gray-900 font-semibold text-lg">
                  {el.userId}
                </div>
                <div className="gap-2 flex justify-start">
                  <div className="flex gap-2">
                    <HiMiniIdentification className="mobile:text-primary-500 text-3xl cursor-pointer" />
                    <div className="font-bold text-xs text-gray-700 gap-4 mt-2">
                      <p className="text-sm">Check your order details</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-end gap-6 py-2 px-6 mt-4">
                  <HiMiniEye
                    className="text-primary-500 text-3xl cursor-pointer"
                    onClick={() => {
                      setIsOpen(true);
                      viewOrderDetail(el.orderId);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
