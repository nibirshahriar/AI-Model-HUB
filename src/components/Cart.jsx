import React from "react";

const Cart = ({ carts }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-5">Your Carts</h1>
      <div className="space-y-3 mt-3">
        {carts.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-around bg-zinc-100 border rounded-lg p-3"
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
            <div className="text-3xl font-bold">${item.price}/month</div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Cart;
