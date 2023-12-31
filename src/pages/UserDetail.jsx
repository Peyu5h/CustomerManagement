import { FaLocationDot } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { MdOutlineDone } from "react-icons/md";

import HistoryCard from "../components/HistoryCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const [customerData, setCustomerData] = useState([]);
  const [currentMonth, setCurrentMonth] = useState("");
  const [isCopiedSTB, setIsCopiedSTB] = useState(false);
  const [isCopiedCID, setIsCopiedCID] = useState(false);
  const params = useParams();

  useEffect(() => {
    const currentDate = new Date();
    const Months = currentDate.toLocaleString("en-US", { month: "long" });
    setCurrentMonth(Months);
  }, []);

  //function to fetch data from db
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/id/${params.id}`);

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

  const handleCopyClickSTB = async () => {
    try {
      await navigator.clipboard.writeText(customerData.STB_ID);
      setIsCopiedSTB(true);
    } catch (err) {
      console.error("Error copying to clipboard:", err);
    }
  };

  const handleCopyClickCID = async () => {
    try {
      await navigator.clipboard.writeText(customerData.CUSTOMER_ID);
      setIsCopiedCID(true);
    } catch (err) {
      console.error("Error copying to clipboard:", err);
    }
  };
  return (
    <main>
      <h1 className="mt-8 text-2xl font-semibold">{customerData.NAME}</h1>
      <div className="address flex gap-x-1 mt-2 text-[0.70rem] items-center">
        <FaLocationDot />
        <p className="">{customerData.ADDRESS}</p>
      </div>

      <div className="stbAndCid flex justify-between mt-8 text-lg">
        <div className="stb flex text-sm items-center gap-x-2">
          <h3>STB: {customerData.STB_ID}</h3>
          <div className="copy" onClick={handleCopyClickSTB}>
            {isCopiedSTB ? (
              <MdOutlineDone className="text-lg text-green-500" />
            ) : (
              <MdContentCopy className="text-lg" />
            )}
          </div>
        </div>
        <div className="cid flex  text-sm items-center gap-x-2">
          <h3>CID: {customerData.CUSTOMER_ID}</h3>
          <div className="copy" onClick={handleCopyClickCID}>
            {isCopiedCID ? (
              <MdOutlineDone className="text-lg text-green-500" />
            ) : (
              <MdContentCopy className="text-lg" />
            )}
          </div>
        </div>
      </div>

      <div className="status mt-12 flex justify-between">
        <div className="text-xl">
          <span className="font-semibold">Status:</span> {currentMonth}
        </div>
        {customerData[currentMonth.toLowerCase()] === "" || null ? (
          <div className="status  bg-red-500 my-auto px-4 py-2 rounded-lg font-semibold">
            UNPAID
          </div>
        ) : (
          <div className="status bg-green-500 my-auto px-5 py-2 rounded-lg font-semibold">
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
                name=""
                id=""
              >
                <option value="">January</option>
                <option value="">February</option>
                <option value="">March</option>
                <option value="">April</option>
                <option value="">May</option>
                <option value="">June</option>
                <option value="">July</option>
                <option value="">August</option>
                <option value="">September</option>
                <option value="">October</option>
                <option value="">November</option>
                <option value="">December</option>
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
              />
            </div>
          </div>
          <div className="btn flex justify-center">
            <button className="bg-orange-500 py-2 px-5 text-white font-semibold rounded-lg mt-8 mb-4">
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
          <HistoryCard data={customerData} />
        </div>
      </div>
    </main>
  );
};

export default UserDetail;
