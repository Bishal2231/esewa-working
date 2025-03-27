import React , { useState } from 'react'
import { generateUniqueId } from "esewajs";
import axios from "axios";

const PaymentForm = () => {
  const [amount, setAmount] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4500/initiate-payment", //server payment route
        {
          amount,
          productId: generateUniqueId(),
        }
      );

      window.location.href = response.data.url;
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };
  return (
    <div>
    <h1>eSewa Payment Integration</h1>

    <div className="form-container" onSubmit={handlePayment}>
      <form className="styled-form">
        <div className="form-group">
          <label htmlFor="Amount">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            placeholder="Enter amount"
          />
        </div>

        <button type="submit" className="submit-button">
          Pay with eSewa
        </button>
      </form>
    </div>
  </div>
  )
}

export default PaymentForm