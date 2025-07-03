// src/components/CheckoutModal.jsx
// Modal component for handling checkout form submission. Appears centered on the screen.
import React, { useState } from "react";

const CheckoutModal = ({ isOpen, onClose }) => {
  // Local state for form fields
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!form.name || !form.email || !form.address) {
      alert("Please fill in all fields!");
      return;
    }

    alert("✅ Order placed successfully!");
    onClose();
  };

  // Don't render modal if not open
  if (!isOpen) return null;

  return (
    // Modal overlay and content, centered on screen
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg relative">
        {/* Close button */}
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Checkout</h2>
        {/* Checkout form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="border rounded px-3 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="border rounded px-3 py-2"
          />
          <textarea
            name="address"
            placeholder="Your Address"
            value={form.address}
            onChange={handleChange}
            className="border rounded px-3 py-2"
            rows="3"
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;
