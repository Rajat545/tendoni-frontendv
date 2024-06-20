"use client";
import { useContext } from 'react';
import Image from 'next/image';
import '@/app/my-profile/style.css';
import garamMasala from '@Images/ProductImages/garammasala.png';
import { AuthContext } from '@/Context/AuthContext';

const MyProfile = () => {
    const { orderHistory } = useContext(AuthContext);
    const userData = JSON.parse(localStorage.getItem("user-info") || '{}');

    const totalSalePrice = orderHistory?.reduce((total, order) => {
        return total + order.products.reduce((orderTotal, item) => orderTotal + item.price * item.quantity, 0);
    }, 0) || 0;

    console.log(orderHistory, 'here is all order');

    return (
        <div className="container px-1 px-md-4 py-5 mx-auto">
            <div className="card">
                <div className="row d-flex justify-content-between px-3 top pl-11">
                    <div className="d-flex">
                        <h1 className="text-xl">Hy : <span className="text-primary font-weight-bold">{orderHistory?.[0]?.customerName || ''}</span></h1>
                    </div>
                    <div className="d-flex">
                        <h1>OrderID <span className="text-primary font-weight-bold">: {orderHistory?.[0]?.orderId || ''}</span></h1>
                        <h5>Order Date <span className="text-primary font-weight-bold">: {orderHistory?.[0]?.orderDate ? new Date(orderHistory[0].orderDate).toLocaleDateString() : ''}</span></h5>
                        <h5> Shipping Address <span className="text-primary font-weight-bold">: {orderHistory?.[0]?.shippingAddress?.addressLine1}</span></h5>
                    </div>
                </div>
                <div>
                    <div className="track">
                        <ul id="progressbar" className="text-center flex justify-between">
                            <li className="flex flex-col items-center">
                                <p className="font-bold p-3">Order Confirmed</p>
                            </li>
                            <li className="flex flex-col items-center">
                                <p className="font-bold p-3">Out of delivery</p>
                            </li>
                            <li className="flex flex-col items-center">
                                <p className="font-bold p-3">Delivered</p>
                            </li>
                            <li className="flex flex-col items-center">

                                <p className="font-bold p-3">Order Cancelled</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex">
                {orderHistory.length === 0 ? (
                    <div className='order-details bg-eceff1 w-60 rounded-lg p-4'>
                        <h1 className='text-xl px-4 py-2'>Order Item</h1>
                        <hr className="my-2" />
                        <p>Looks like you haven't placed an order.</p>
                    </div>
                ) : (
                    <>
                        <div className='order-details bg-eceff1 w-60 rounded-lg p-4'>
                            <h1 className="text-xl">Order Item</h1>
                            <hr className="my-2" />
                            {orderHistory.map(order => (
                                order.products.map(item => (
                                    <div key={item.productId} id='justify-contant' className="flex items-center justify-between p-4">
                                        <Image
                                            className="w-9"
                                            src={garamMasala}
                                            alt="Product"
                                        />
                                        <h1 className="ml-4">{item.ProductName}</h1>
                                        <h1>{item.quantity} x {item.value}</h1>
                                        <h1 className="price">Rs. {item.price}</h1>
                                    </div>
                                ))
                            ))}
                        </div>
                        <div className='sub-total bg-eceff1 w-60 rounded-lg p-4 ml-64'id='price'>
                            <div id='total' className="flex items-center justify-between mb-2">
                                <p>Sub Total</p>
                                <p>Rs. {totalSalePrice}</p>
                            </div>
                            <div id='total2' className="flex items-center justify-between mb-2">
                                <p>Discount</p>
                                <p>20%</p>
                            </div>
                            <div id='total3' className="flex items-center justify-between mb-2">
                                <p className="font-medium">Total Price</p>
                                <p className="font-medium">{totalSalePrice}</p>
                            </div>
                            <div id='total4' className="flex items-center justify-between">
                                <p>Shipping charge</p>
                                <p><b>Rs. {totalSalePrice + 6.00}</b></p>
                            </div>
                        </div>
                    </>
                )}
            </div>

        </div>
    );
};

export default MyProfile;
