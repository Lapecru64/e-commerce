import React, { useState } from 'react';

const PaymentModal = ({ onClose }) => {
  const [cardType, setCardType] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardPin, setCardPin] = useState('');

  const handleCardNumberChange = (event) => {
    const inputNumber = event.target.value.replace(/\D/g, '');
    if (inputNumber.length <= 16) {
      setCardNumber(inputNumber);
    }
  };

  const handleCardPinChange = (event) => {
    const inputPin = event.target.value.replace(/\D/g, '');
    setCardPin(inputPin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cardNumber.length !== 16) {
      alert('No es un número de tarjeta válido.');
      return;
    }
    // Aquí puedes realizar el proceso de pago con los datos ingresados
    // Luego, puedes cerrar el modal
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content payment-modal">
        <h2>Payment Information</h2>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="cardType">Tipo de Tarjeta:</label>
            <input
              type="text"
              id="cardType"
              value={cardType}
              onChange={(e) => setCardType(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cardholderName">Nombre del Tarjetahabiente:</label>
            <input
              type="text"
              id="cardholderName"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cardNumber">Número de Tarjeta:</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
          </div>
          <div>
            <label htmlFor="cardPin">PIN de la Tarjeta:</label>
            <input
              type="password"
              id="cardPin"
              value={cardPin}
              onChange={handleCardPinChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
