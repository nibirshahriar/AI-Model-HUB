import React from "react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
toast.success('Payment successful!')
  };

  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
toast.error('Item is deleted')
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center py-5">Your Carts</h1>

      {carts.length === 0 ? (
        <p className="text-center text-xl mb-6 bg-gray-100 p-5 text-gray-400">
          Your Cart Is Empty
        </p>
      ) : (
        <>
          <div className="space-y-3 mt-3">
            {carts.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-zinc-100 border rounded-lg p-3"
              >
                <div className="flex items-center gap-2">
                  <div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-contain"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">{item.title}</h2>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="text-3xl font-bold">${item.price}/month</div>

                  <button
                    onClick={() => {
                      handleDelete(item);
                    }}
                    className="btn  btn-error rounded-full"
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between bg-black text-white p-5 mt-5 rounded-lg text-3xl font-bold mb-5">
            <div>Total</div>
            <div>${totalPrice}</div>
          </div>

          <button
            onClick={() => handlePayment()}
            className="btn w-full my-4 bg-red-500 text-2xl text-white rounded-lg"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
