import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import UserCard from "../components/userCard";

const UserList = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [customerData, setCustomerData] = useState([]);
  const [currentMonth, setCurrentMonth] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [toggle, setToggle] = useState(false);
  const [sortField, setSortField] = useState("Sort By:");
  const [sortData, setSortData] = useState("");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const currentDate = new Date();
    const Months = currentDate.toLocaleString("en-US", { month: "long" });
    setCurrentMonth(Months.toLowerCase());
  }, []);

  const fetchData = async () => {
    try {
      setLoader(true);
      const response = await fetch(`${apiUrl}?search=${searchTerm}`);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setCustomerData(data);
      setLoader(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = async () => {
    try {
      fetchData();
      setSearchTerm("");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSortPaid = () => {
    setToggle(!toggle);
    setSortField("PAID ");
    setSortData("PAID");
  };

  const handleSortUnpaid = () => {
    setToggle(!toggle);
    setSortField("UNPAID");
    setSortData("UNPAID");
  };

  const handleSortReset = () => {
    setToggle(!toggle);
    setSortField("All User");
    setSortData("");
  };

  return (
    <div>
      {loader && (
        <div className="loader flex justify-center item-center h-screen w-full">
          <img
            className="w-12 h-auto my-auto"
            src="https://i.giphy.com/l4FGKbWgkhHVGXzTW.webp"
            alt="spinner"
          />
        </div>
      )}

      <div className="p-6">
        <nav>
          <div className="search flex justify-center mt-3 gap-x-4">
            <input
              className="p-2 rounded-lg pl-5 bg-slate-700 outline-none"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <div
              className="btn bg-orange-500 flex items-center justify-center p-4 rounded-lg cursor-pointer"
              onClick={handleSearch}
            >
              <IoSearch className="text-xl text-white" />
            </div>
          </div>
        </nav>
        {/* --------------------------------------------- */}
        <div className="container mt-12 flex justify-between item">
          <div className="AllUsers flex gap-x-2">
            <h1 className="text-2xl font-bold">All Users</h1>
            <span className="text-lg font-thin mt-1">
              ({customerData.length})
            </span>
          </div>

          <div className="sort flex-col bg-slate-700 p-2 px-3 rounded-lg flex item-center justify-between w-28 ">
            <div onClick={() => setToggle(!toggle)} className="flex">
              {sortField} <FaChevronDown className="ml-2 my-auto" />
            </div>
            {toggle ? (
              <div className="sortbox">
                <div className=" rounded-b-md bg-slate-700">
                  <div
                    onClick={handleSortReset}
                    className="text-md cursor-pointer font-light px-2  mt-3 border-t-[1px] pt-3  transition-all border-slate-500 w-full"
                  >
                    All User
                  </div>

                  <div
                    onClick={handleSortPaid}
                    className="text-md cursor-pointer font-light px-2  mt-3 border-t-[1px] pt-3  transition-all border-slate-500 w-full"
                  >
                    PAID
                  </div>

                  <div className="divider h-[2px] w-full bg-slate-700 my-1 "></div>
                  <div className="flex flex-col   items-start justify-start">
                    <div
                      onClick={handleSortUnpaid}
                      className="text-md cursor-pointer font-light p-2 border-t-[1px] pt-3  transition-all border-slate-500 w-full"
                    >
                      UNPAID
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        {/* --------------------------------------------- */}
        <div className="cardContainer mt-8">
          {customerData.length === 0 ? (
            <div className="flex gap-y-6 flex-col justify-center items-center mt-40 text-2xl font-semibold text-white">
              <h1>No User Found</h1>
              <button
                onClick={fetchData}
                className="bg-orange-500 px-3 py-2 rounded-lg"
              >
                Show all users
              </button>
            </div>
          ) : (
            customerData
              .filter((data) => {
                if (sortData === "PAID") {
                  return (
                    data[currentMonth] !== "" && data[currentMonth] !== null
                  );
                } else if (sortData === "UNPAID") {
                  return !data[currentMonth] || data[currentMonth] === "";
                }
                return true;
              })
              .map((filteredData, index) => (
                <UserCard
                  key={index}
                  data={filteredData}
                  currentMonth={currentMonth}
                />
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
