"use client";
import Image from 'next/image'; // Import Image from next/image
import EditNoteIcon from '@mui/icons-material/EditNote';
import garamMasala from '@Images/ProductImages/garammasala.png';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import '@/app/my-order/style.css';
import Link from 'next/link';
import { isAuth } from '@/Context/AuthContext';
import './style.css'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const MyOrder = () => {
    const [orderHistory, setOrderHistory] = useState([]);
    const router = useRouter()
    const isAuthnticate = isAuth()
    const handleCheck = () => {
          if (isAuthnticate){
            router.push("/my-profile")
          }else{
            router.push("/login")
          }
        }
    const userData = JSON.parse(localStorage.getItem("user-info") || '{}');
    console.log(userData.data, "UserData")

      useEffect(() => {
        const fetchOrderHistory = async () => {
          try {
            const response = await fetch("https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/orderHistoryData", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${userData?.data?.access_token}`,
              },
              body: JSON.stringify({ customerId: userData?.data?.customerId }),
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setOrderHistory(data.data ) 
            console.log(data.data, 'Order History')
          } catch (error) {
            console.error('Error fetching order history:', error);
          }
        };
    
        if (userData?.data?.customerId) {
          fetchOrderHistory();
        }
      }, [userData?.data?.customerId]);
    
    
    return (
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="uer-info">
                        <div className="card user-card-full">
                            <div className="row m-l-0 m-r-0">
                                <div className="col-sm-8">
                                    <div className="card-block">
                                        <div>
                                        <h1 style={{ fontSize: 'x-large' }}>User Information</h1>
                                            <EditNoteIcon style={{ marginLeft: '90%' }} />
                                        </div>
                                        <div className="user-details">
                                            <div className='flex-name' >
                                                <h1 className="name">Name :</h1>
                                                <h6 className="user-name">{userData.data.name}</h6>
                                            </div>
                                            <div className='flex-name' >
                                                <h1 className="name" >Email : </h1>
                                                <h6 className="text-muted" >{userData.data.email}</h6>
                                            </div>
                                            <div className='flex-name'>
                                                <h1 className="name">Phone : </h1>
                                                <h6 className="text-muted">{userData.data.number}</h6>
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

                    {orderHistory?.map((item)=>(
                        <>
                        <div className="flex items-center justify-between" style={{ padding: '20px' }} key={item.productId}>
                        <Image
                            style={{ width: "8%" }}
                            src={item.ProductImage}
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
                            <span className="price">DILIVERED</span>
                        </div>
                        <div className="col-sm-6">
                            <Link href={"/my-profile"}><RemoveRedEyeOutlinedIcon /></Link>
                        </div>
                    </div>
                    <hr />
                        </>
                ))} 


                </div>
            </div>

        </div>

    );
}

export default MyOrder;
