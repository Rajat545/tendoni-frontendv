"use client";
import Image from 'next/image';
import EditNoteIcon from '@mui/icons-material/EditNote';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import '@/app/my-order/style.css';
import Link from 'next/link';
import { isAuth } from '@/Context/AuthContext';
import './style.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import garamMasala from '@Images/ProductImages/garammasala.png';

const MyOrder = () => {
    const [orderHistory, setOrderHistory] = useState();
    const router = useRouter();
    const isAuthenticated = isAuth();

    const handleCheck = () => {
        if (isAuthenticated) {
            router.push("/my-profile");
        } else {
            router.push("/login");
        }
    };

    const userData = JSON.parse(localStorage.getItem("user-info") || '{}');
    console.log(userData.data, "UserData");

    useEffect(() => {
        const fetchOrderHistory = async () => {
            if (!userData.data || !userData.data.customerId || !userData.data.access_token) {
                console.error('User data or token missing');
                router.push('/login');
                return;
            }

            const { customerId, access_token } = userData.data;
            console.log(access_token, 'access_token');

            try {
                const response = await fetch("https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/orderHistoryData", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `${access_token}`,
                    },
                    body: JSON.stringify({ customerId: "a0903d3e-2597-412d-a6fa-a5613bb66a0f" }),
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        console.error('Unauthorized Token, Please login again.');
                        router.push('/login');
                    }
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data, 'Fetched order history data'); // Log the entire response
                setOrderHistory(data?.data);
                console.log(data.data.products, 'Order History final');
            } catch (error) {
                console.error('Error fetching order history:', error);
            }
        };

        if (userData?.data?.customerId) {
            fetchOrderHistory();
        }
    }, [userData?.data?.customerId, router]);

    console.log(orderHistory, 'Order history details');

    return (
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="user-info">
                        <div className="card user-card-full" style={{width : '97%'}}>
                            <div className="row m-l-0 m-r-0">
                                <div className="col-sm-8">
                                    <div className="card-block">
                                        <div>
                                            <h1 style={{ fontSize: 'x-large' }}>User Information</h1>
                                            <EditNoteIcon style={{ marginLeft: '90%' }} />
                                        </div>
                                        <div className="user-details">
                                            <div className='flex-name'>
                                                <h1 className="name">Name :</h1>
                                                <h6 className="user-name">{userData?.data?.name}</h6>
                                            </div>
                                            <div className='flex-name'>
                                                <h1 className="name">Email :</h1>
                                                <h6 className="text-muted">{userData?.data?.email}</h6>
                                            </div>
                                            <div className='flex-name'>
                                                <h1 className="name">Phone :</h1>
                                                <h6 className="text-muted">{userData?.data?.number}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='order-details'>
                  <div style={{padding: '20px'}}>
                  <h1 style={{ fontSize: 'x-large' }}>Order history</h1>
                    <p style={{color: '#635e5e'}}>Check the status of recent order, manage return, and discover similar products</p>
                  </div>
                    <hr />

                    {orderHistory?.map((order) => (
                        order.products.map((item) => (
                            <div className="flex items-center justify-between" style={{ padding: '55px' }} key={item.productId}>
                                <Image
                                    style={{ width: "8%" }}
                                    src={item.ProductImage || garamMasala}
                                    alt="Product"
                                    width={50}
                                    height={50}
                                />
                                <div style={{ display: 'flex' }}>
                                    <h1>{item.ProductName} : Quantity: {item.quantity} x {item.value}</h1>
                                </div>
                                <div>
                                    <h1 style={{ textDecoration: "line-through" }}>Price: 900</h1>
                                    <span className="price">Rs. {item.price}</span>
                                </div>
                                <div>
                                    <h1>Status</h1>
                                    <span className="price">DELIVERED</span>
                                </div>
                                <div className="col-sm-6">
                                    <Link href={"/my-profile"}><RemoveRedEyeOutlinedIcon /></Link>
                                </div>
                                <hr />
                            </div>
                        ))
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyOrder;


