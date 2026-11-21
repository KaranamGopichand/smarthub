import { useState } from "react";
import "./ProductRegistration.css";

function ProductRegistration() {
  const [modelNumber, setModelNumber] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  function handleReset() {
  setModelNumber("");
  setSerialNumber("");
  setPurchaseDate("");
  setMessage("");
  setIsSuccess(false);
}

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !modelNumber.trim() ||
      !serialNumber.trim() ||
      !purchaseDate
    ) {
      setMessage("Please fill in all fields.");
      setIsSuccess(false);
      return;
    }

    if (purchaseDate > new Date().toLocaleDateString("en-CA")) {
      setMessage("Purchase date cannot be in the future.");
      setIsSuccess(false);
      return;
    }

    setMessage("Product registered successfully!");
    setIsSuccess(true);
  }

  return (
    <section className="registration-container">
      <h2>Register Your Product</h2>

      <form
        className="registration-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <label htmlFor="modelNumber">
          Product Model Number
        </label>
        <input
          type="text"
          id="modelNumber"
          name="modelNumber"
          placeholder="Enter model number"
          value={modelNumber}
          onChange={(event) => {
            setModelNumber(event.target.value);
            setMessage("");
          }}
        />

        <label htmlFor="serialNumber">
          Serial Number
        </label>
        <input
          type="text"
          id="serialNumber"
          name="serialNumber"
          placeholder="Enter serial number"
          value={serialNumber}
          onChange={(event) => {
            setSerialNumber(event.target.value);
            setMessage("");
          }}
        />

        <label htmlFor="purchaseDate">
          Purchase Date
        </label>
        <input
          type="date"
          id="purchaseDate"
          name="purchaseDate"
          value={purchaseDate}
          onChange={(event) => {
            setPurchaseDate(event.target.value);
            setMessage("");
          }}
        />

        <button type="submit">
          Register Product
        </button>
        <button type="button" onClick={handleReset}>
         Reset
        </button>
      </form>

      {message && (
        <p
          className={
            isSuccess
              ? "registration-success"
              : "registration-error"
          }
          role="status"
        >
          {message}
        </p>
      )}

      <div className="registration-preview">
        <h3>Live Form Data</h3>
        <p>Model: {modelNumber}</p>
        <p>Serial: {serialNumber}</p>
        <p>Purchase Date: {purchaseDate}</p>
      </div>
    </section>
  );
}

export default ProductRegistration;