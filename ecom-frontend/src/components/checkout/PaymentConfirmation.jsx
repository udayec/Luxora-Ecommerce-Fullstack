import React, { useEffect, useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { stripePaymentConfirmation } from '../../store/actions';
import toast from 'react-hot-toast';

const PaymentConfirmation = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const dispatch = useDispatch();
    const  [errorMessage, setErrorMessage ] = useState("");
    const { cart } = useSelector((state) => state.carts);
    const [ loading, setLoading] = useState(false);

    const paymentIntent = searchParams.get("payment_intent");
    const clientSecret = searchParams.get("payment_intent_client_secret");
    const redirectStatus = searchParams.get("redirect_status");
    const selectedUserCheckoutAddress = localStorage.getItem("CHECKOUT_ADDRESS")
        ? JSON.parse(localStorage.getItem("CHECKOUT_ADDRESS"))
        : [];

    useEffect(() => {
        if (paymentIntent &&
            clientSecret &&
            redirectStatus &&
            cart &&
            cart?.length > 0
        ) { 
            console.log(selectedUserCheckoutAddress);
            const sendData = {
                addressId: selectedUserCheckoutAddress.addressId,
                pgName: "Stripe",
                pgPaymentId: paymentIntent,
                pgStatus: "succeeded",
                pgResponseMessage: "Payment successful"
              };
              console.log(sendData);
            dispatch(stripePaymentConfirmation(sendData, setErrorMessage, setLoading, toast));
        }
    }, [paymentIntent, clientSecret, redirectStatus, cart]);

  return (
    <div className='min-h-screen flex items-center justify-center'>
        {loading ? (
            <div className='max-w-xl mx-auto'>
                <Skeleton />
          </div>
        ) : (
             <div className="bg-white rounded-2xl shadow-xl text-center max-w-lg mx-auto px-8 py-10 border border-gray-200 mt-12">
      <div className="text-emerald-500 mb-6 flex justify-center">
        <FaCheckCircle size={72} />
      </div>
      <h2 className="text-4xl font-semibold text-gray-800 mb-3">
        Payment Successful
      </h2>
      <p className="text-gray-600 mb-8 text-[17px] leading-relaxed">
        Thank you for your purchase! We’ve received your payment and are getting
        your order ready.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/profile/orders"
          className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition shadow-sm"
        >
          View My Orders
        </Link>
        <Link
          to="/products"
          className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition shadow-sm"
        >
          Continue Exploring
        </Link>
      </div>
    </div>
        )}
    </div>
  )
}

export default PaymentConfirmation