import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import { clearItem } from "../redux/features/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  return (
    <div>
      {cartItems.map((item) => {
        const { name, imageId, price, id } = item.card.info;
        console.log(item);
        return (
          <>
            <div
              className=" border border-gray-400 flex justify-between p-3 m-3 rounded-lg shadow-lg items-center"
              key={id}
            >
              <img
                className=" w-72 h-56 rounded-lg shadow-lg"
                alt={name}
                src={`${IMG_CDN_URL}${imageId}`}
              />
              <h1 className=" uppercase font-semibold">{name}</h1>
              <h1 className=" uppercase font-semibold">₹ {price / 100}</h1>
              <div>
                <button className=" bg-green-500 inline-block mr-2 rounded-md py-2 mx-4 p-2 hover:text-white">
                  Add
                </button>
                <button className=" bg-red-500 inline-block rounded-md py-2 mx-4 p-2 hover:text-white">
                  Remove
                </button>
              </div>
            </div>
          </>
        );
      })}
      {cartItems.length >= 1 ? (
        <div className=" text-right mr-5 ">
          <button
            className=" bg-blue-600 py-2 p-2 rounded-md text-white hover:bg-red-500"
            onClick={() => dispatch(clearItem())}
          >
            Clear cart - {cartItems.length}
          </button>
        </div>
      ) : (  
        <h1 className=" text-center font-semibold flex justify-center items-center min-h-screen text-2xl text-red-500">Your Cart Is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
