import React, { useState } from "react";
import Modal from "../../Modal";

export default function Orders() {
  // const { usersOder } = useOder();
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return (
      <Modal onClose={() => setIsOpen(false)}>
        <div>
          {usersOder
            ? usersOder.map((el) => (
                <div key={el.id}>
                  {el.userId ? (
                    <>
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
                    </>
                  ) : null}
                </div>
              ))
            : null}
        </div>
      </Modal>
    );
  }
}

//Link to Orders.jsx
