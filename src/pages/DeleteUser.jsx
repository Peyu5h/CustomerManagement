import { useEffect, useState } from "react";
import UserCard from "../components/UserCard.jsx";
import { IoSearch } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteUser = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loader, setLoader] = useState(true);
  const [customerData, setCustomerData] = useState([]);

  const apiUrl = import.meta.env.VITE_API_URL;

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
    });
  };

  const handleDeleteResponse = (message, type) => {
    if (type === "success") {
      notify("User Deleted Successfully", "success ");
    } else if (type === "error") {
      notify("Error Deleting User", "error ");
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/delete?id=${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const text = await response.text();
        if (text) {
          const deletedUser = JSON.parse(text);
          handleDeleteResponse(
            `User ${deletedUser.id} deleted successfully`,
            "success"
          );
          fetchData();
        } else {
          handleDeleteResponse("User deleted successfully", "success");
        }
      } else {
        const errorData = await response.json();
        handleDeleteResponse(
          `Error deleting user: ${errorData.error}`,
          "error"
        );
      }
    } catch (error) {
      handleDeleteResponse(`Error: ${error.message}`, "error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* <div className="  h-[900vh] w-full bg-black/50 fixed inset-0 overflow-y-auto transition-opacity">
        <div className="flex h-screen justify-center items-center">
          <div className="box bg-white w-42 rounded-lg">HEHEHEH</div>
        </div>
      </div> */}
      {loader ? (
        <div className="loader flex justify-center item-center h-screen w-full">
          <img
            className="w-12 h-auto my-auto"
            src="https://i.giphy.com/l4FGKbWgkhHVGXzTW.webp"
            alt="spinner"
          />
        </div>
      ) : (
        <div>
          <div className="flex gap-x-4 justify-center my-5 ">
            <div className="search flex justify-center h-12 gap-x-3 mt-3 md:mx-0 ">
              <input
                className="p-2 rounded-lg pl-5 w-48 md:w-56 text-sm bg-slate-700 outline-none"
                type="text"
                placeholder="Search User to Remove"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
              <div
                className="btn bg-orange-500 flex items-center justify-center p-3 rounded-lg cursor-pointer"
                onClick={handleSearch}
              >
                <IoSearch className="text-xl text-white" />
              </div>
            </div>
            <div className="nav"></div>
          </div>

          <div className="cardContainer mt-8 mx-4">
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
              customerData.map((filteredData, index) => (
                <UserCard
                  key={index}
                  data={filteredData}
                  currentMonth={"delete"}
                  onDeleteUser={() => handleDeleteUser(filteredData.id)}
                  onDeleteResponse={handleDeleteResponse}
                />
              ))
            )}
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};
export default DeleteUser;
