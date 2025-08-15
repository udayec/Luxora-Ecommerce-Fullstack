import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaBoxOpen, FaCalendarAlt, FaMoneyBillWave } from 'react-icons/fa';
import Loader from '../shared/Loader';
import ErrorPage from '../shared/ErrorPage';
import { getAddressById, getUserOrders } from '../../store/actions';
import toast from 'react-hot-toast';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, isLoading, error } = useSelector((state) => state.orders);
  const { addressMap } = useSelector((state) => state.addresses);

// Fetch address when orders are fetched
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

// After orders are fetched, trigger address fetches
useEffect(() => {
  if (orders && orders.length > 0) {
    orders.forEach((order) => {
      if (!addressMap[order.addressId]) {
        dispatch(getAddressById(order.addressId));
      }
    });
  }
}, [orders, dispatch]);


  const handleCancel = () => {
    toast.error("Can't be cancelled at this stage.");
  };

  if (isLoading) return <Loader />;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  if (!orders || orders.length === 0) {
    return <ErrorPage message="You haven't placed any orders yet." />;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">My Orders</h2>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.orderId}
            className="border rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-200 bg-white"
          >
            {/* Order Header */}
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-3">
                <FaBoxOpen className="text-blue-600" />
                <p className="font-semibold text-lg text-gray-700">
                  Order ID: {order.orderId}
                </p>
              </div>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <FaCalendarAlt className="text-gray-500" /> {order.orderDate}
              </p>
            </div>

            {/* Order Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Total:</span> ₹{order.totalAmount}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Status:</span> {order.orderStatus}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Payment Mode:</span>{" "}
                  {order.payment?.paymentMethod}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Payment Status:</span>{" "}
                  {order.payment?.pgStatus}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Transaction ID:</span>{" "}
                  {order.payment?.pgPaymentId}
                </p>
              </div>
            </div>

            {/* Ordered Items */}
            <div className="border-t pt-3">
              <h4 className="font-medium text-gray-700 mb-3">Ordered Items:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from(
                new Map(order.orderItems.map((item) => [item.product.productId, item]))
                  .values()
              ).map((item, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-3 flex gap-3 items-start bg-gray-50"
                >
                  <img
                    src={`http://localhost:8080/images/${item.product.image}`}
                    alt={item.product.productName}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {item.product.productName}
                    </p>
                    <p className="text-sm text-gray-600">
                      {item.product.description}
                    </p>
                    <p className="text-sm mt-1 text-gray-700">
                      Qty: {item.quantity} | ₹{item.orderedProductPrice}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            </div>

            <div className="mt-3 text-sm text-gray-600">
              <span className="font-medium">Delivery Address:</span>{" "}
              {addressMap[order.addressId]
                ? `${addressMap[order.addressId].street}, ${addressMap[order.addressId].city}, ${addressMap[order.addressId].state}`
                : "Loading..."}
            </div>


            {/* Cancel Button */}
            <div className="mt-4 text-right">
              <button
                onClick={handleCancel}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-sm"
              >
                Cancel Order
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 font-medium rounded-lg border border-slate-300 shadow-sm hover:bg-slate-200 hover:scale-105 transition duration-200"
      >
        <MessageCircle className="w-4 h-4 text-slate-600" />
        Need Help?
      </Link>
    </div>
    </div>
  );
};

export default Orders;





