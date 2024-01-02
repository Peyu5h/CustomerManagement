import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import UserCard from "../components/userCard";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const UserList = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [customerData, setCustomerData] = useState([]);
  const [currentMonth, setCurrentMonth] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [toggle, setToggle] = useState(false);
  const [sortField, setSortField] = useState("Sort By:");
  const [sortData, setSortData] = useState("");
  const [loader, setLoader] = useState(true);
  const [toggleMenu, setToggleMenu] = useState(false);

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
      {loader ? (
        <div className="loader flex justify-center item-center h-screen w-full">
          <img
            className="w-12 h-auto my-auto"
            src="https://i.giphy.com/l4FGKbWgkhHVGXzTW.webp"
            alt="spinner"
          />
        </div>
      ) : (
        <div className="relative">
          <div
            className={`menuSlider fixed inset-0 bg-[#1D1D1D] transition-transform duration-300 ${
              toggleMenu ? "translate-x-0" : "translate-x-full"
            } `}
          >
            <div className="flex justify-end p-4">
              <RxCross2
                className="text-white cursor-pointer text-4xl absolute top-10 right-6"
                onClick={() => setToggleMenu(false)}
              />
            </div>
            <div className="flex flex-col gap-y-8 items-center justify-center h-full">
              <Link to="/adduser">
                <h1 className="flex gap-x-3 text-3xl font-int font-medium">
                  ADD USER
                  <IoAddOutline className="text-4xl my-auto" />
                </h1>
              </Link>
              <Link to="/deleteUser">
                <h1 className="flex gap-x-4 text-3xl font-int font-medium">
                  Delete USER
                  <FaTrash className="text-2xl my-auto" />
                </h1>
              </Link>

              <h1
                className="flex  gap-x-4 text-3xl font-int font-medium cursor-pointer"
                onClick={() => window.open(`${apiUrl}/exportUsers`, "_blank")}
              >
                EXPORT CSV
                <FiDownload />
              </h1>
            </div>
          </div>
          <div className="p-6 lg:px-64">
            <nav className="flex justify-between w-full">
              {/* logo */}
              <div className="hidden cursor-pointer md:flex logo gap-x-2">
                <img
                  className="w-20"
                  src="https://assets-global.website-files.com/64c4b66a44c38c5fa4309e5a/6593f7b056f85cda48a3c672_saiKrupaLogo.png"
                  alt=""
                />
                <div className="my-auto">
                  <h1 className="text-2xl font-semibold">
                    <span className="font-black text-orange-500 font-int">
                      Sai
                    </span>
                    Krupa
                  </h1>
                  <span className="font-light">Cable Network</span>
                </div>
              </div>

              {/* search */}
              <div className="flex gap-x-4 justify-between">
                <div className="search flex justify-center h-10  mt-3 md:mx-0 ">
                  <input
                    className="p-2 rounded-l-lg pl-5 w-44 md:w-56  bg-slate-700 outline-none"
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                    }}
                  />
                  <div
                    className="btn bg-orange-500 flex items-center justify-center p-3 rounded-r-lg cursor-pointer"
                    onClick={handleSearch}
                  >
                    <IoSearch className="text-xl text-white" />
                  </div>
                </div>
                <div className="nav"></div>
              </div>
              <div className="flex justify-between">
                <div className="hamburger flex items-center justify-end md:ml-0 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => {
                      setToggleMenu(!toggleMenu);
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
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

              <div className="sort flex-col cursor-pointer bg-slate-700 p-2 px-3 rounded-lg flex item-center justify-between w-28 ">
                <div onClick={() => setToggle(!toggle)} className="flex">
                  {sortField} <FaChevronDown className="ml-2 my-auto" />
                </div>
                {toggle ? (
                  <div className="sortbox">
                    <div className=" rounded-b-md  bg-slate-700">
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
      )}
    </div>
  );
};

export default UserList;
