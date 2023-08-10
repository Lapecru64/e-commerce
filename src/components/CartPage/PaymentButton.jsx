import React, { useState } from 'react';
import PaymentModal from './PaymentModal';

const PaymentButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Go to payment page</button>
      {isModalOpen && <PaymentModal onClose={handleCloseModal} />}
    </div>
  );
};

export default PaymentButton;



