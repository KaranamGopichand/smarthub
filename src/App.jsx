import React from 'react'
import Header from "./components/Header";
import './App.css'
import Footer from "./components/Footer";
import ProductRegistration from "./components/ProductRegistration";

function App() {
  return (
    <div className="app-container">
      <Header title="SmartHub Customer Care" />

      <main className="main-content">
        <h1>Welcome to SmartHub</h1>
        <p>Your product support center</p>
        <button>Register Product</button>
        <ProductRegistration />
      </main>

      <Footer companyName="SmartHub" />
    </div>
  );
}

export default App;
