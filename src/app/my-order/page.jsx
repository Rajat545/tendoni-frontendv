"use client";
import Image from 'next/image';
import EditNoteIcon from '@mui/icons-material/EditNote';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import '@/app/my-order/style.css'; // Ensure your global styles are imported correctly
import Link from 'next/link';
import { AuthContext, isAuth } from '@/Context/AuthContext';
import './style.css'; // Local styles specific to MyOrder component
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import garamMasala from '@Images/ProductImages/garammasala.png';

const MyOrder = () => {
    const router = useRouter();
    const isAuthenticated = isAuth();
    const { orderHistory, setOrderHistory } = useContext(AuthContext);

    const [currentPage, setCurrentPage] = useState(0);
    const [itemPerPage] = useState(2);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: ''
    });

    const openModal = () => {
        setFormData({
            name: userData?.data?.name || '',
            email: userData?.data?.email || '',
            number: userData?.data?.number || ''
        });
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/updateCustomerById', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (response.ok) {
                // Update UI with new data
                userData.data.name = formData.name;
                userData.data.email = formData.email;
                userData.data.number = formData.number;
                closeModal();
                // Apply CSS effect to highlight changes
                document.querySelector('.user-details').classList.add('highlight');
                setTimeout(() => {
                    document.querySelector('.user-details').classList.remove('highlight');
                }, 2000);
            } else {
                console.error(result);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const userData = JSON.parse(localStorage.getItem("user-info") || '{}');
    console.log(userData.data, "UserData");

    console.log(orderHistory, 'Order history details');

    const sortedOrderHistory = orderHistory.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const indexOfLastItem = (currentPage + 1) * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItems = sortedOrderHistory.slice(indexOfFirstItem, indexOfLastItem);

    const totalPage = Math.ceil(orderHistory.length / itemPerPage);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage);
    };

    const handleCheck = () => {
        if (isAuthenticated) {
            router.push("/my-profile");
        } else {
            router.push("/login");
        }
    };

    return (
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="user-info">
                        <div className="card user-card-full">
                            <div className="row m-l-0 m-r-0">
                                <div className="col-sm-8">
                                    <div className="card-block">
                                        <div className="flex justify-between items-center">
                                            <h1 className="text-xl">User Information</h1>
                                            <button onClick={openModal} className="ml-auto"><EditNoteIcon /></button>
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

                    {/* Modal for editing user information */}
                    {modalIsOpen && (
                        <div className="modal">
                            <div className="modal-content">
                                <span className="close" onClick={closeModal}>&times;</span>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input
                                            type="email"
                                           
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone:</label>
                                        <input
                                            type="text"
                                            name="number"
                                            value={formData.number}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Save Changes</button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MyOrder;
