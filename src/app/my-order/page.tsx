"use client";
import Image from 'next/image'; // Import Image from next/image
import EditNoteIcon from '@mui/icons-material/EditNote';
import garamMasala from '@Images/ProductImages/garammasala.png';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import '@/app/my-order/style.css';
import Link from 'next/link';
import { isAuth } from '@/Context/AuthContext';

const MyOrder = () => {
    const isAuthnticate = isAuth()
    const handleCheck = () => {
          if (isAuthnticate){
            router.push("/my-profile")
          }else{
            router.push("/login")
          }
        }
    // const userData = JSON.parse(localStorage.getItem("user-info") || '{}');
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
                                            <EditNoteIcon style={{ marginLeft: '90%' }} />
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <h1 className="m-b-10 f-w-600">Name</h1>
                                                <h6 className="text-muted f-w-400">'N/A'</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <h1 className="m-b-10 f-w-600">Email</h1>
                                                <h6 className="text-muted f-w-400">'N/A'</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <h1 className="m-b-10 f-w-600">Phone</h1>
                                                <h6 className="text-muted f-w-400">'N/A'</h6>
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

                    <div className="flex items-center justify-between" style={{ padding: '20px' }}>
                        <Image
                            style={{ width: "8%" }}
                            src={garamMasala}
                            alt="Product"
                            width={50}
                            height={50}
                        />
                        <div style={{ display: 'flex' }}>
                            <h1>Turmeric : Quantity: 1 x 1kg</h1>
                        </div>
                        <div>
                            <h1 style={{ textDecoration: "line-through" }}>Price: 900</h1>
                            <span className="price">Rs. 500</span>
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
                    <div className="flex items-center justify-between" style={{ padding: '20px' }}>
                        <Image
                            style={{ width: "8%" }}
                            src={garamMasala}
                            alt="Product"
                            width={50}
                            height={50}
                        />
                        <div style={{ display: 'flex' }}>
                            <h1>Turmeric : Quantity: 1 x 1kg</h1>
                        </div>
                        <div>
                            <h1 style={{ textDecoration: "line-through" }}>Price: 900</h1>
                            <span className="price">Rs. 500</span>
                        </div>
                        <div>
                            <h1>Status</h1>
                            <span className="price">DILIVERED</span>
                        </div>
                        <div className="col-sm-6">
                            <button onClick={handleCheck}><RemoveRedEyeOutlinedIcon /></button>
                        </div>
                    </div>
                    <hr />

                </div>
            </div>

        </div>

    );
}

export default MyOrder;
