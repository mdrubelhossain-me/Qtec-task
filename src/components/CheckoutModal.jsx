import React from "react";
import { useForm } from "react-hook-form";

const CheckoutModal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
    alert("Order placed successfully!");
    onClose();
    reset(); // clear form fields after close
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
          onClick={() => {
            onClose();
            reset();
          }}
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4">Checkout</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
              className="border rounded px-3 py-2 w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              className="border rounded px-3 py-2 w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Address */}
          <div>
            <textarea
              placeholder="Your Address"
              rows="3"
              {...register("address", { required: "Address is required" })}
              className="border rounded px-3 py-2 w-full"
            ></textarea>
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
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
