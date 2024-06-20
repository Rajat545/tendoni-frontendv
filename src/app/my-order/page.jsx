"use client";
import Image from 'next/image';
import EditNoteIcon from '@mui/icons-material/EditNote';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import '@/app/my-order/style.css';
import Link from 'next/link';
import { AuthContext, isAuth } from '@/Context/AuthContext';
import './style.css';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import garamMasala from '@Images/ProductImages/garammasala.png';

const MyOrder = () => {
    // const [orderHistory, setOrderHistory] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemPerPage] = useState(2);
    const router = useRouter();
    const isAuthenticated = isAuth();
    const { orderHistory, setOrderHistory } = useContext(AuthContext)

    const handleCheck = () => {
        if (isAuthenticated) {
            router.push("/my-profile");
        } else {
            router.push("/login");
        }
    };

    const userData = JSON.parse(localStorage.getItem("user-info") || '{}');
    console.log(userData.data, "UserData");

    // useEffect(() => {
    //     const fetchOrderHistory = async () => {
    //         if (!userData.data || !userData.data.customerId || !userData.data.access_token) {
    //             console.error('User data or token missing');
    //             router.push('/login');
    //             return;
    //         }

    //         const { customerId, access_token } = userData.data;
    //         console.log(customerId,"custumerID is here ")
    //         console.log(access_token, 'access_token');

    //         try {
    //             const response = await fetch("https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/orderHistoryData", {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Accept': 'application/json',
    //                     'Authorization': `${access_token}`,
    //                 },
    //                 body: JSON.stringify({ customerId}),
    //             });

    //             if (!response.ok) {
    //                 if (response.status === 401) {
    //                     console.error('Unauthorized Token, Please login again.');
    //                     router.push('/login');
    //                 }
    //                 throw new Error('Network response was not ok');
    //             }

    //             const data = await response.json();
    //             console.log(data, 'Fetched order history data'); // Log the entire response
    //             setOrderHistory(data?.data || []);
    //             console.log(data.data.products, 'Order History final');
    //         } catch (error) {
    //             console.error('Error fetching order history:', error);
    //         }
    //     };

    //     if (userData?.data?.customerId) {
    //         fetchOrderHistory();
    //     }
    // }, [userData?.data?.customerId, router]);

    console.log(orderHistory, 'Order history details');

    const sortedOrderHistory = orderHistory.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const indexOfLastItem = (currentPage + 1) * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItems = sortedOrderHistory.slice(indexOfFirstItem, indexOfLastItem);

    const totalPage = Math.ceil(orderHistory.length / itemPerPage);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage);
    }

    return (
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="user-info">
                        <div className="card user-card-full" >
                            <div className="row m-l-0 m-r-0">
                                <div className="col-sm-8">
                                    <div className="card-block">
                                        <div className="flex justify-between items-center">
                                            <h1 className="text-xl">User Information</h1>
                                            <EditNoteIcon className="ml-auto" />
                                        </div>
                                        <div className="user-details mt-4">
                                            <div className="flex items-center mb-2">
                                                <h1 className="name">Name :</h1>
                                                <h6 className="user-name ml-2">{userData?.data?.name}</h6>
                                            </div>
                                            <div className="flex items-center mb-2">
                                                <h1 className="name">Email :</h1>
                                                <h6 className="text-muted ml-2">{userData?.data?.email}</h6>
                                            </div>
                                            <div className="flex items-center mb-2">
                                                <h1 className="name">Phone :</h1>
                                                <h6 className="text-muted ml-2">{userData?.data?.number}</h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-details">
                    <div className="p-4">
                        <h1 className="text-xl">Order history</h1>
                        <p className="text-gray-600">Check the status of recent orders, manage returns, and discover similar products</p>
                    </div>

                    {orderHistory.length === 0 ? (
                        <div className="container border border-gray-300 rounded-lg p-4 text-center">
                            <h2>You have not ordered yet.</h2>
                        </div>
                    ) : (
                        <div className="container border border-gray-300 rounded-lg">
                            <div className="class">

                                <hr />
                                {currentItems.map((order) => (
                                    order.products.map((item) => (
                                        <div key={item.productId}>
                                            <div className="flex items-center justify-between p-4">
                                                <Image
                                                    src={garamMasala}
                                                    alt="Product"
                                                    width={50}
                                                    height={50}
                                                    className="w-12 h-15"
                                                />
                                                <div className="flex">
                                                    <h1 className="text-lg">{item.ProductName} : Quantity: {item.quantity} x {item.value}</h1>
                                                </div>
                                                <h1 className="text-lg">Order Date: {new Date(order.orderDate).toLocaleDateString()}</h1>
                                                <div>
                                                    <h1 className="text-lg">Rs. {item.price}</h1>
                                                </div>
                                                <div>
                                                    <h1 className="text-lg">Status</h1>
                                                    <span className="text-gray-700">DELIVERED</span>
                                                </div>
                                                <div>
                                                    <Link href="/my-profile">
                                                        <RemoveRedEyeOutlinedIcon className="text-gray-700" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <hr className="border-gray-200" />
                                        </div>
                                    ))
                                ))}

                            </div>
                        </div>
                    )}

                    {orderHistory.length > 0 && (
                        <div className="flex justify-center space-x-1">
                            <button
                                title="previous"
                                type="button"
                                onClick={() => handlePageChange(Math.max(0, currentPage - 1))}
                                className={`inline-flex items-center justify-center w-8 h-8 border rounded-md shadow-md ${currentPage === 0 ? 'bg-gray-200' : 'bg-white'}`}
                                disabled={currentPage === 0}
                            >
                                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>
                            {Array.from({ length: totalPage }, (_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => handlePageChange(index)}
                                    className={`inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md ${index === currentPage ? 'bg-gray-200' : 'bg-white'}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button
                                title="next"
                                type="button"
                                onClick={() => handlePageChange(Math.min(totalPage - 1, currentPage + 1))}
                                className={`inline-flex items-center justify-center w-8 h-8 border rounded-md shadow-md ${currentPage === totalPage - 1 ? 'bg-gray-200' : 'bg-white'}`}
                                disabled={currentPage === totalPage - 1}
                            >
                                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MyOrder;
