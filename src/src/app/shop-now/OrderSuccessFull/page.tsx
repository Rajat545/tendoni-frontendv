import React from 'react'
import '@/app/shop-now/OrderSuccessFull/style.css'
import Link from 'next/link'
export default function OrderSuccessFull() {
    return (
        <>
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <div>
                    <div className="mb-4 text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-success"
                            width="75"
                            height="75"
                            style={{display: 'unset'}}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                           
                        >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                    </div>
                    <div className="text-center">
                        <h1>Order Successfull!</h1>

                        <p>Thank you so much for your order, We've sent the link to your inbox.</ p>
                        <Link href='/my-order' className="btn btn-primary">Go to Order History</Link>
                    </div>
                </div>
            </div>
        </>
    )
}