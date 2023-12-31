import UserCard from "../components/userCard";
import { IoSearch } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

import { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserList = () => {
  const [customerData, setCustomerData] = useState([]);
  const [currentMonth, setCurrentMonth] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const Months = currentDate.toLocaleString("en-US", { month: "long" });
    setCurrentMonth(Months.toLowerCase());
  }, []);

  //function to fetch data from db
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setCustomerData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //fetch data
  useEffect(() => {
    fetchData();
  }, []);
  //   console.log(customerData);

  return (
    <div>
      <div className="">
        <nav>
          <div className="search flex justify-center mt-3 gap-x-4">
            <input
              className="p-2 rounded-lg pl-5 bg-slate-700 outline-none"
              type="text"
              placeholder="Search..."
            />
            <div className="btn bg-orange-500 flex items-center justify-center p-4 rounded-lg cursor-pointer">
              <IoSearch className="text-xl text-white" />
            </div>
          </div>
        </nav>
        {/* --------------------------------------------- */}
        <div className="container mt-12 flex justify-between item">
          <div className="AllUsers flex gap-x-2">
            <h1 className="text-2xl font-bold">All Users</h1>
            <span className="text-lg font-thin mt-1">(183)</span>
          </div>

          <div className="sort bg-slate-700 p-2 px-3 rounded-lg flex item-center justify-between w-28 ">
            Sort By: <FaChevronDown className="ml-2 my-auto" />
          </div>
        </div>
        {/* --------------------------------------------- */}
        <div className="cardContainer mt-8">
          {customerData.map((data, index) => (
            <UserCard key={index} data={data} currentMonth={currentMonth} />
            //   {data[currentMonth] === "" ? <td>UNPAID</td> : <td>PAID</td>}
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
