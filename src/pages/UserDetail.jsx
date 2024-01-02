import { FaLocationDot } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { MdOutlineDone } from "react-icons/md";

import { format } from "date-fns";

import HistoryCard from "../components/HistoryCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserDetail = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [customerData, setCustomerData] = useState([]);
  const [currentMonth, setCurrentMonth] = useState("");
  const [isCopiedSTB, setIsCopiedSTB] = useState(false);
  const [isCopiedCID, setIsCopiedCID] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [selectedBalance, setSelectedBalance] = useState("");
  const [selectedAdvance, setSelectedAdvance] = useState("");
  const [dates, setDates] = useState({
    January: "",
    February: "",
    March: "",
    April: "",
    May: "",
    June: "",
    July: "",
    August: "",
    September: "",
    October: "",
    November: "",
    December: "",
  });

  const params = useParams();

  useEffect(() => {
    const currentDate = new Date();
    const Months = currentDate.toLocaleString("en-US", { month: "long" });
    setCurrentMonth(Months);
  }, []);

  //function to fetch data from db
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://usermanagement-wsra.onrender.com/id/${params.id}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setCustomerData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleMonthChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedMonth(selectedValue);

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    const updatedDates = {
      ...dates,
      [`${selectedMonth.toLowerCase()}_date`]: formattedDate,
    };
    setDates(updatedDates);
  };

  const handleAmountChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedAmount(selectedValue);
  };

  const handleBalanceChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedBalance(selectedValue);
  };

  const handleAdvanceChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedAdvance(selectedValue);
  };

  //fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const handleCopyClickSTB = async () => {
    try {
      await navigator.clipboard.writeText(customerData.STB_ID);
      setIsCopiedSTB(true);
      notify("Copied to clipboard:", "info");
    } catch (err) {
      console.error("Error copying to clipboard:", err);
    }
  };

  const handleCopyClickCID = async () => {
    try {
      await navigator.clipboard.writeText(customerData.CUSTOMER_ID);
      setIsCopiedCID(true);
      notify("Copied to clipboard:", "info");
    } catch (err) {
      console.error("Error copying to clipboard:", err);
      notify("Error copying to clipboard:", "error");
    }
  };

  const notify = (message, type) => {
    toast(message, {
      type: type,
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // mobile: true,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const currentDate = new Date();
      const formattedDate = format(currentDate, "dd/MM/yyyy");

      const response = await fetch(
        `https://usermanagement-wsra.onrender.com/update/${params.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            [selectedMonth.toLowerCase()]: selectedAmount,
            [`${selectedMonth.toLowerCase()}_advance`]: selectedAdvance,
            [`${selectedMonth.toLowerCase()}_balance`]: selectedBalance,
            [`${selectedMonth.toLowerCase()}_date`]: formattedDate,
            [`${selectedMonth.toLowerCase()}_date`]:
              selectedAmount.trim() !== "" ? formattedDate : null,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update data");
      }

      notify("Data updated successfully", "success ");
      console.log("Data updated successfully");

      const updatedData = await response.json();
      setCustomerData(updatedData);
      setSelectedMonth("");
      setSelectedAmount("");
      setSelectedBalance("");
      setSelectedAdvance("");
    } catch (error) {
      // Error: show error toast
      notify("Error updating data", "error");
      console.error("Error updating data:", error);

      console.error("Error updating data:", error);
    }
  };

  return (
    <main className="p-6 md:px-48">
      <h1 className="mt-12 md:text-4xl text-2xl font-semibold">
        {customerData.NAME}
      </h1>
      <div className="address md:text-[0.72rem] flex gap-x-1 mt-2 text-[0.70rem] items-center">
        <FaLocationDot />
        <p className="">{customerData.ADDRESS}</p>
      </div>

      <div className="stbAndCid flex justify-between mt-8 text-lg">
        <div className="stb flex text-sm items-center gap-x-2">
          <h3 className="md:text-lg">STB: {customerData.STB_ID}</h3>
          <div className="copy cursor-pointer" onClick={handleCopyClickSTB}>
            {isCopiedSTB ? (
              <MdOutlineDone className="text-lg text-green-500" />
            ) : (
              <MdContentCopy className="text-lg" />
            )}
          </div>
        </div>
        <div className="cid flex  text-sm items-center gap-x-2">
          <h3 className="md:text-lg">CID: {customerData.CUSTOMER_ID}</h3>
          <div className="copy cursor-pointer" onClick={handleCopyClickCID}>
            {isCopiedCID ? (
              <MdOutlineDone className="text-lg text-green-500" />
            ) : (
              <MdContentCopy className="text-lg" />
            )}
          </div>
        </div>
      </div>

      <div className="status mt-12 flex justify-between">
        <div className="text-xl md:text-2xl">
          <span className="font-semibold ">Status:</span> {currentMonth}
        </div>
        {customerData[currentMonth.toLowerCase()] === "" || null ? (
          <div className="status  bg-red-500 my-auto px-4 py-2 rounded-lg font-semibold">
            UNPAID
          </div>
        ) : (
          <div className="status bg-green-600 my-auto px-5 py-2 rounded-lg font-semibold">
            PAID
          </div>
        )}
      </div>

      <div className="form bg-[#1D1D1D] rounded-md p-4 mt-8">
        <form action="">
          <h1 className="text-xl font-semibold mb-7">Add Entry </h1>

          <div className="monthAndAmount flex justify-between gap-x-2">
            <div className="month flex flex-col w-[40%]">
              <label className="flex w-auto text-sm mb-1 gap-x-1" htmlFor="">
                <div className="relative ml-1">
                  Month
                  <div className="text-lg text-orange-700 absolute bottom-[0.1rem] left-10">
                    *
                  </div>
                </div>
              </label>
              <select
                className="outline-none p-2  rounded-md bg-[#303030]"
                name="selectedMonth"
                value={selectedMonth}
                onChange={handleMonthChange}
              >
                <option value="">--------</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>

            <div className="amount flex flex-col w-[40%]">
              <label className="flex w-auto text-sm mb-1 gap-x-1" htmlFor="">
                <div className="relative ml-1">
                  Amount
                  <div className="text-lg text-orange-700 absolute bottom-[0.1rem] left-[3.2rem]">
                    *
                  </div>
                </div>
              </label>
              <input
                className="outline-none p-2  rounded-md bg-[#303030]"
                type="text"
                pattern="[0-9]*"
                inputMode="numeric"
                placeholder="Enter Amount"
                value={selectedAmount}
                onChange={handleAmountChange}
              />
            </div>
          </div>

          <div className="balanceAndAdvance flex justify-between gap-x-2 mt-8">
            <div className="balace flex flex-col w-[40%]">
              <label className="flex text-sm mb-1 ml-1" htmlFor="">
                Balance
              </label>
              <input
                className="outline-none p-2  rounded-md bg-[#303030]"
                type="text"
                pattern="[0-9]*"
                inputMode="numeric"
                placeholder="Enter Amount"
                value={selectedBalance}
                onChange={handleBalanceChange}
              />
            </div>
            <div className="advance flex flex-col w-[40%]">
              <label className="flex text-sm mb-1 ml-1" htmlFor="">
                Advance
              </label>
              <input
                className="outline-none p-2  rounded-md bg-[#303030]"
                type="text"
                pattern="[0-9]*"
                inputMode="numeric"
                placeholder="Enter Amount"
                value={selectedAdvance}
                onChange={handleAdvanceChange}
              />
            </div>
          </div>
          <div className="btn flex justify-center">
            <button
              onClick={handleUpdate}
              className="bg-orange-500 py-2 px-5 text-white font-semibold rounded-lg mt-8 mb-4"
            >
              UPDATE
            </button>
          </div>
        </form>
      </div>

      <div className="history mt-12 mb-4">
        <div className="title flex gap-x-3 item-center text-xl font-semibold">
          <h1>History</h1>
          <LuHistory className="my-auto mt-2" />
        </div>
        <div className="">
          <HistoryCard data={customerData} selectedMonth="January" />
          <HistoryCard data={customerData} selectedMonth="February" />
          <HistoryCard data={customerData} selectedMonth="March" />
          <HistoryCard data={customerData} selectedMonth="April" />
          <HistoryCard data={customerData} selectedMonth="May" />
          <HistoryCard data={customerData} selectedMonth="June" />
          <HistoryCard data={customerData} selectedMonth="July" />
          <HistoryCard data={customerData} selectedMonth="August" />
          <HistoryCard data={customerData} selectedMonth="September" />
          <HistoryCard data={customerData} selectedMonth="October" />
          <HistoryCard data={customerData} selectedMonth="November" />
          <HistoryCard data={customerData} selectedMonth="December" />
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};

export default UserDetail;
