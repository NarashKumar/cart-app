import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Cart from './Cart'

const CartPage = () => {
    window.scrollTo(0, 0);
    const navigate = useNavigate();
    
    // Use the stored restaurant details from Redux
    const { 
        restaurantId, 
        restaurantName, 
        restaurantDetails,
        items: cartItems 
    } = useSelector((state) => state.cart);

    const handleBack = () => {
        if (restaurantId) {
            // Navigate to the specific restaurant if ID exists
            navigate(/* `/restaurant/${restaurantId}` */-1, {
                state: { 
                    restaurant: restaurantDetails || { 
                        location_id: restaurantId,
                        location_name: restaurantName
                    } 
                }
            })
        } else {
            // Fallback to home if no restaurant ID (empty cart)
            navigate("/")
        }
    }

    return (
        <div className="container mx-auto p-4 mt-20">
            <h1 className="lg:text-3xl md:text-2xl text-lg font-bold mb-6">
                {cartItems.length > 0 
                    ? `Your Cart (${restaurantName})` 
                    : 'Cart is Empty'}
            </h1>
            <div className="overflow-hidden ">
                <Cart />
            </div>
            <button 
                onClick={handleBack}
                className="hover:cursor-pointer bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mt-4"
            >
                {restaurantId ? 'Back to Restaurant' : 'Back to Home'}
            </button>
        </div>
    )
}

export default CartPage;