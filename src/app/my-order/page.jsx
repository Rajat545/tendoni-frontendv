"use client";
import EditNoteIcon from "@mui/icons-material/EditNote";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import "@/app/my-order/style.css"; // Ensure your global styles are imported correctly
import Link from "next/link";
import { AuthContext, isAuth } from "@/Context/AuthContext";
import "./style.css"; // Local styles specific to MyOrder component
import { useRouter } from "next/navigation";
import { useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import toast, { Toaster } from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const MyOrder = () => {
  const router = useRouter();
  const isAuthenticated = isAuth();
  const { orderHistory, setOrderHistory, handleOrderDetails } =
    useContext(AuthContext);

  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage] = useState(3);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [displayData, setDisplayData] = useState({
    name: "",
    email: "",
    number: "",
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
      const userDisplayData = {
        name: userData?.data?.name || "",
        email: userData?.data?.email || "",
        number: userData?.data?.number || "",
      };
      setFormData(userDisplayData);
      setDisplayData(userDisplayData);
    }
  }, []);

  const openModal = () => {
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
      const response = await fetch(
        "https://backend-tendoni-backend.ffbufe.easypanel.host/web/api/v1/updateCustomerById",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      if (response.ok) {
        if (typeof window !== "undefined") {
          const userData = JSON.parse(
            localStorage.getItem("user-info") || "{}"
          );
          userData.data.name = formData.name;
          userData.data.email = formData.email;
          userData.data.number = formData.number;
          localStorage.setItem("user-info", JSON.stringify(userData));
          setDisplayData(formData);
          closeModal();
          toast.success("Save Change!");
          s;
          document.querySelector(".user-details").classList.add("highlight");
          setTimeout(() => {
            document
              .querySelector(".user-details")
              .classList.remove("highlight");
          }, 2000);
        }
      } else {
        toast.error("check your Network");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Sorting orderHistory by createdAt date in descending order
  const sortedOrderHistory = orderHistory.sort(
    (a, b) => new Date(b.orderDate) - new Date(a.orderDate)
  );

  // Pagination logic
  const indexOfLastItem = (currentPage + 1) * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = sortedOrderHistory.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

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
  console.log(currentItems, "data");

  return (
    <div className="page-content page-container" id="page-content">
      <Toaster />
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="user-info w-full">
            <div className="card user-card-full">
              <div className="row m-l-0 m-r-0">
                <div className="col-12">
                  <div className="card-block">
                    <div className="flex justify-between items-center">
                      <h1 className="text-xl">User Information</h1>
                      <button onClick={openModal} className="ml-auto">
                        <EditNoteIcon />
                      </button>
                    </div>
                    <div className="user-details mt-4 gap-[312px]">
                      <div className="flex items-center mb-2">
                        <h1 className="name font-semibold">Name:</h1>
                        <h6 className="user-name ml-2">{displayData.name}</h6>
                      </div>
                      <div className="flex items-center mb-2">
                        <h1 className="name font-semibold">Email:</h1>
                        <h6 className="text-muted ml-2">{displayData.email}</h6>
                      </div>
                      <div className="flex items-center mb-2">
                        <h1 className="name font-semibold">Phone:</h1>
                        <h6 className="text-muted ml-2">
                          {displayData.number}
                        </h6>
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
            <p className="text-gray-600">
              Check the status of recent orders, manage returns, and discover
              similar products
            </p>
          </div>

          {orderHistory.length === 0 ? (
            <div className="container border border-gray-300 rounded-lg p-4 text-center">
              <h2>You have not ordered yet.</h2>
            </div>
          ) : (
            <div className="container border border-gray-300 rounded-lg">
              <div className="class">
                <div id="responsive-list" className="flex p-4 gap-[174px]">
                  <h1 className="text-lg font-semibold">OrderId</h1>
                  <h1 className="text-lg font-semibold">Product Details</h1>
                  <h1 className="text-lg font-semibold ml-[86px]">
                    Order Date
                  </h1>
                  <h1 className="text-lg font-semibold">Price</h1>
                  <h1 className="text-lg font-semibold ml-[64px]">Status</h1>
                  <h1 className="text-lg font-semibold">Track Order</h1>
                </div>
                <hr />

                {currentItems.map((order) => (
                  <div key={order.orderId} className="mb-6">
                    <div
                      id="order-list"
                      className="p-6 bg-white shadow rounded-lg"
                    >
                      <div
                        id="responsive-div"
                        className="grid grid-cols-12 items-center gap-4"
                      >
                        <div className="col-span-2">
                          <h1 className="text-lg font-semibold">
                            {order.orderId}
                          </h1>
                        </div>
                        <div className="col-span-3">
                          <h1 className="text-lg">
                            {order.products.length} Items
                          </h1>
                        </div>
                        <div className="col-span-2">
                          <h1 className="text-lg">
                            {new Date(order.orderDate).toLocaleDateString()}
                          </h1>
                        </div>
                        <div className="col-span-2">
                          <h1 className="text-lg">
                            Rs. {order.finaltotalPrice}
                          </h1>
                        </div>
                        <div className="col-span-2">
                          <span className="text-gray-700">
                            {order.orderState}
                          </span>
                        </div>
                        <div className="col-span-1 flex justify-center">
                          <Link
                            href="/my-profile"
                            onClick={() => handleOrderDetails(order.orderId)}
                          >
                            <RemoveRedEyeOutlinedIcon className="text-gray-700" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <hr className="border-gray-200 mt-4" />
                  </div>
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
                className={`inline-flex items-center justify-center w-8 h-8 border rounded-md shadow-md ${
                  currentPage === 0 ? "bg-gray-200" : "bg-white"
                }`}
                disabled={currentPage === 0}
              >
                <svg
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              {Array.from({ length: totalPage }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handlePageChange(index)}
                  className={`inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md ${
                    index === currentPage ? "bg-gray-200" : "bg-white"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                title="next"
                type="button"
                onClick={() =>
                  handlePageChange(Math.min(totalPage - 1, currentPage + 1))
                }
                className={`inline-flex items-center justify-center w-8 h-8 border rounded-md shadow-md ${
                  currentPage === totalPage - 1 ? "bg-gray-200" : "bg-white"
                }`}
                disabled={currentPage === totalPage - 1}
              >
                <svg
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          )}

          <Modal
            open={modalIsOpen}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
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
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save Changes
                </button>
              </form>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
