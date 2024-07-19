"use client";
import { useContext } from 'react';
import Image from 'next/image';
import '@/app/my-profile/style.css';
import garamMasala from '@Images/ProductImages/garammasala.png';
import { AuthContext } from '@/Context/AuthContext';

const MyProfile = () => {
    const { trackProduct } = useContext(AuthContext);
    

    const getStepIndex = () => {
        switch (trackProduct[0]?.orderState) {
            case 'OrderPlaced':
                return 1;
            case 'OrderConfirm':
                return 2;
            case 'ReadyToShip':
                return 3;
            case 'Dispatched':
                return 4;
            case 'Delivered':
                return 5;
            case 'Cancelled':
                return 0;
            default:
                return 1;
        }
    };

    return (
        <div className="container px-1 px-md-4 py-5 mx-auto">
            <div className="card">
                <div className="row d-flex justify-content-between px-3 top pl-11">
                    <div className="d-flex">
                        <h1 className="text-xl">Hello : <span className="text-primary font-weight-bold">{trackProduct ? trackProduct[0]?.customerName : 'NA'}</span></h1>
                    </div>
                    <div className="d-flex">
                        <h1>OrderID <span className="text-primary font-weight-bold">: {trackProduct ? trackProduct[0]?.orderId : 'NA'}</span></h1>
                        <h5>Order Date <span className="text-primary font-weight-bold">: {trackProduct ? trackProduct[0]?.orderDate : 'NA'}</span></h5>
                        <h5> Shipping Address <span className="text-primary font-weight-bold">: {trackProduct ? trackProduct[0]?.shippingAddress.addressLine1 : 'NA'}</span></h5>
                    </div>
                </div>
                <div>
                    <div className="track">
                        <ul id="progressbar" className="text-center flex justify-between">

                            <li className={`flex flex-col items-center ${getStepIndex() >= 1 ? 'text-green-500' : 'text-black'}`}>
                                <p className="font-bold p-3">Order Placed</p>
                            </li>
                            <li className={`flex flex-col items-center ${getStepIndex() >= 2 ? 'text-green-500' : 'text-black'}`}>
                                <p className="font-bold p-3">Order Confirm</p>
                            </li>
                            <li className={`flex flex-col items-center ${getStepIndex() >= 3 ? 'text-green-500' : 'text-black'}`}>
                                <p className="font-bold p-3">ReadyToShip</p>
                            </li>
                            <li className={`flex flex-col items-center ${getStepIndex() >= 4 ? 'text-green-500' : 'text-black'}`}>
                                <p className="font-bold p-3">Order Dispatched</p>
                            </li>
                            <li className={`flex flex-col items-center ${getStepIndex() >= 5 ? 'text-green-500' : 'text-black'}`}>
                                <p className="font-bold p-3">Delivered</p>
                            </li>
                            <li className={`flex flex-col items-center ${getStepIndex() == 0 ? 'text-red-500' : 'text-black'}`}>
                                <p className="font-bold p-3">Order Cancelled</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex">
                {trackProduct.length === 0 ? (
                    <div className='bg-[#eceff1] rounded-lg p-2.5 w-full p-4'>
                        <h1 className='text-xl px-4 py-2'>Order Item</h1>
                        <hr className="my-2" />
                        <p>Looks like you haven't placed an order.</p>
                    </div>
                ) : (
                    <>
                        <div className='bg-[#eceff1] rounded-lg p-2.5 w-full'>
                            <h1 className="text-xl">Order Item</h1>
                            <hr className="my-2" />
                            {trackProduct.map(order => (
                                order.products.map(item => (
                                    <div key={item.productId} id='justify-contant' className="flex items-center justify-between p-4">
                                        <Image
                                            src={item.ProductImage}
                                            alt="Product"
                                            width={100}
                                            height={500}
                                        />
                                        <h1 className="ml-4">{item.ProductName}</h1>
                                        <h1>{item.quantity} x {item.value}</h1>
                                        <h1 className="price">Rs. {item.price}</h1>
                                    </div>
                                ))
                            ))}
                        </div>
                        <div className='sub-total bg-eceff1 w-60 rounded-lg p-4 ml-64' id='price'>
                            <div id='total-price' className="flex item-center justify-between">
                                <div>
                                    <p>Total Price</p>
                                </div>
                                <div>
                                    <p>Rs.{trackProduct ? trackProduct[0]?.totalPrice : 'NA'}</p>
                                </div>
                            </div>
                            <div id='total-price' className="flex item-center justify-between">
                                <div>
                                    <p>Discount</p>
                                </div>
                                <div>
                                    <p> {trackProduct ? trackProduct[0]?.discount : 'NA'}</p>
                                </div>
                            </div>
                            <div id='total-price' className="flex item-center justify-between">
                                <div>
                                    <p>Sub Total</p>
                                </div>
                                <div>
                                    <p>Rs. {trackProduct ? trackProduct[0]?.totalSalePrice : 'NA'}</p>
                                </div>
                            </div>
                            <div id='total-price' className="flex item-center justify-between">
                                <div>
                                    <p>Shipping charge</p>
                                </div>
                                <div>
                                    <p> + {trackProduct ? trackProduct[0]?.deliveryCharge : 'NA'}</p>
                                </div>
                            </div>
                            <div id='total-price' className="flex item-center justify-between">
                                <div>
                                    <p>Payment Mode</p>
                                </div>
                                <div>
                                    <p>  {trackProduct ? trackProduct[0]?.paymentDetails.paymentMethod : 'NA'}</p>
                                </div>
                            </div>
                            <div id='total-price' className="flex item-center justify-between">
                                <div>
                                    <p>Payment Status</p>
                                </div>
                                <div>
                                    <p>  {trackProduct ? trackProduct[0]?.paymentDetails.paymentStatus : 'NA'}</p>
                                </div>
                            </div>
                            <div id='total-price' className="flex item-center justify-between">
                                <div>
                                    <p className='font-medium'>Grand Total</p>
                                </div>
                                <div>
                                    <p className='font-medium'> {trackProduct ? trackProduct[0]?.finaltotalPrice : 'NA'}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default MyProfile;
