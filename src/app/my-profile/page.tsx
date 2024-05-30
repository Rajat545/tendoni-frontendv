"use client";
import { useContext } from 'react';
import { CartContext } from '@/Context/CartContext';
import Image from 'next/image';
import '@/app/my-profile/style.css';

const MyProfile = () => {
    const { cart } = useContext(CartContext);
    console.log(cart, "my order details");

    
    const totalSalePrice = cart?.reduce((total, item) => total + item.sale_price, 0) || 0;

    return (
        <div className="container px-1 px-md-4 py-5 mx-auto">
            <div className="card">
                <div className="row d-flex justify-content-between px-3 top">
                    <div className="d-flex">
                        <h1 style={{ fontSize: 'x-large' }}>Hy<span className="text-primary font-weight-bold"> Yash !</span></h1>
                        <h5>ORDER No<span className="text-primary font-weight-bold">#Y34XDHR</span></h5>
                    </div>
                    <div className="d-flex flex-column text-sm-right">
                        <p className="mb-0">Expected Arrival <span>01/12/19</span></p>
                        <p><span className="font-weight-bold">Your order is out of delivery</span></p>
                    </div>
                </div>
                <div className="">
                    <div className="track">
                        <ul id="progressbar" className="text-center">
                            <li className="active"></li>
                            <li className="active"></li>
                            <li className="active"></li>
                            <li className="active"></li>
                        </ul>
                    </div>
                </div>
                <div className="row justify-content-between top" style={{ display: 'flex', columnGap: '32vh' }}>
                    <div className="row d-flex icon-content">
                        <img className="icon" src="https://i.imgur.com/9nnc9Et.png" alt="Order Confirmed" />
                        <div className="d-flex flex-column">
                            <p className="font-weight-bold">Order<br />Confirmed</p>
                        </div>
                    </div>
                    <div className="row d-flex icon-content">
                        <img className="icon" src="https://i.imgur.com/u1AzR7w.png" alt="Out of delivery" />
                        <div className="d-flex flex-column">
                            <p className="font-weight-bold">Out of delivery</p>
                        </div>
                    </div>
                    <div className="row d-flex icon-content">
                        <img className="icon" src="https://i.imgur.com/TkPm63y.png" alt="Delivered" />
                        <div className="d-flex flex-column">
                            <p className="font-weight-bold">Delivered</p>
                        </div>
                    </div>
                    <div className="row d-flex icon-content">
                        <img className="icon" src="https://cdn4.iconfinder.com/data/icons/logistic-13/1024/order_cancel2-512.png" alt="Order Cancelled" />
                        <div className="d-flex flex-column">
                            <p className="font-weight-bold">Order<br />Cancelled</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div className='order-details'>
                    <h1 style={{ fontSize: 'x-large' }}>Order Details</h1>
                    <hr />
                    {cart && cart.length > 0 ? (
                        cart.map((item, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <Image
                                    style={{ width: "8%" }}
                                    src={item.ProductImage}
                                    alt="Product"
                                    width={50}
                                    height={50}
                                />
                                <div style={{ display: 'flex' }}>
                                    <p>{item.productName} : {item.quantity} x {item.variant.Value}</p>
                                </div>
                                <div>
                                    <p style={{ textDecoration: "line-through" }}>Rs. {item.price}</p>
                                    <span className="price">Rs. {item.sale_price}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Looks like you haven't placed an order.</p>
                    )}
                </div>
                <div className='order-total'>
                    <h1 style={{ fontSize: 'x-large' }}>Order Total</h1>
                    <hr />
                    {cart && cart.length > 0 ? (
                        <>
                            <div className="flex items-center justify-between">
                                <p>Sub Total</p>
                                <p>Rs. {totalSalePrice}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p>Shipping</p>
                                <p>Enter shipping address</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p>Estimated Taxes</p>
                                <p>Rs. 6.00</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="font-medium">Total</p>
                                <p><b>Rs. {totalSalePrice + 6.00}</b></p>
                            </div>
                        </>
                    ) : (
                        <p>No order items.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
