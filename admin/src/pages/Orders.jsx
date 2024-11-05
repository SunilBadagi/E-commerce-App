import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(`${backendUrl}/api/order/list`, {}, { headers: { token } });
      if (response.data.success) setOrders(response.data.orders);
      else toast.error(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/status`,
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="p-5 space-y-6 bg-gray-100 min-h-screen">
      {orders.map((order) => (
        <div
          key={order._id}
          className="bg-white rounded-lg p-5 shadow-md border border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between"
        >
          {/* Parcel Icon */}
          <img src={assets.parcel_icon} alt="Parcel Icon" className="w-12 h-12 mb-3 md:mb-0" />

          {/* Order Details */}
          <div className="flex-1 space-y-2">
            <div className="text-gray-700 text-sm">
              {order.items.map((item, index) => {
                if (index === order.items.length-1) {
                return <p key={index}>
                  {item.name} x {item.quantity} <span className="italic text-gray-500">({item.size})</span>
                </p>
                }else{
                  return <p key={index}>
                  {item.name} x {item.quantity} <span className="italic text-gray-500">({item.size})</span>
                </p>
                }
              })}
            </div>
            <p className="font-medium text-gray-800">{`${order.address.firstName} ${order.address.lastName}`}</p>
            <div className="text-gray-600 text-sm">
              <p>{`${order.address.street},`}</p>
              <p>{`${order.address.city}, ${order.address.state}, ${order.address.country}, ${order.address.zipcode}`}</p>
              <p>{order.address.phone}</p>
            </div>
          </div>

          {/* Order Info */}
          <div className="text-gray-700 space-y-1 mt-3 md:mt-0 text-sm md:ml-6">
            <p>Items: {order.items.length}</p>
            <p>Method: {order.paymentMethod}</p>
            <p>Payment: {order.payment ? 'Done' : 'Pending'}</p>
            <p>Date: {new Date(order.date).toDateString()}</p>
          </div>

          {/* Amount */}
          <p className="text-lg font-semibold text-blue-500 mt-3 md:mt-0 md:ml-6">{`${currency}${order.amount}`}</p>

          {/* Status Select */}
          <select
            onChange={(event) => statusHandler(event, order._id)}
            value={order.status}
            className="mt-3 md:mt-0 md:ml-6 py-2 px-3 border border-gray-300 rounded-lg text-gray-700 bg-gray-50"
          >
            <option value="Order Placed">Order Placed</option>
            <option value="Packing">Packing</option>
            <option value="Shipped">Shipped</option>
            <option value="Out for delivery">Out for delivery</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default Orders;
