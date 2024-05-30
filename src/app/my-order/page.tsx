"use client";
import Image from 'next/image'; // Import Image from next/image
import EditNoteIcon from '@mui/icons-material/EditNote';

import '@/app/my-order/style.css';
import { useContext } from 'react';
import { CartContext } from '@/Context/CartContext';

const MyOrder = () => {
    const { user , cart} = useContext(CartContext);
    const userData = JSON.parse(localStorage.getItem("user-info") || '{}'); // Parse userData from localStorage
    console.log(userData, "userData");
    console.log("user-name email number", user);

    return (
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-xl-6 col-md-12">
                        <div className="card user-card-full">
                            <div className="row m-l-0 m-r-0">
                                <div className="col-sm-8">
                                    <div className="card-block">
                                        <div>
                                            <h1 className="m-b-20 p-b-5 b-b-default f-w-600">User Information</h1>
                                            {/* <EditNoteIcon style={{ marginLeft: '90%' }} /> */}
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <h1 className="m-b-10 f-w-600">Name</h1>
                                                <h6 className="text-muted f-w-400">{userData.data.name || 'N/A'}</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <h1 className="m-b-10 f-w-600">Email</h1>
                                                <h6 className="text-muted f-w-400">{userData.data.email || 'N/A'}</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <h1 className="m-b-10 f-w-600">Phone</h1>
                                                <h6 className="text-muted f-w-400">{userData.data.number || 'N/A'}</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <h1 className="m-b-10 f-w-600">Address</h1>
                                                <h6 className="text-muted f-w-400">{userData.data.address || 'N/A'}</h6>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='order-details'>
                    <h1 style={{ fontSize: 'x-large' }}>Order history</h1>
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
                        <p>Looks like you haven't order.</p>
                    )}
                </div>
            </div>
            
        </div>
        
    );
}

export default MyOrder;
