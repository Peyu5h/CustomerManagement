import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    NAME: "",
    PHONE: "",
    CUSTOMER_ID: "",
    STB_ID: "",
    ADDRESS: "",
  });

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/addUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User added successfully:", data);
        // Handle success, e.g., show a success message or redirect
      } else {
        const errorData = await response.json();
        console.error("Error adding user:", errorData);
        // Handle error, e.g., show an error message to the user
      }
      notify("User added successfully", "success ");
      setFormData({
        NAME: "",
        PHONE: "",
        CUSTOMER_ID: "",
        STB_ID: "",
        ADDRESS: "",
      });
    } catch (error) {
      console.error("Error:", error);
      notify("Error updating data", "error");
      // Handle network errors or other issues
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

  return (
    <>
      <div className="p-6">
        <h1 className="text-3xl font-semibold mt-2 ml-2 font-int">
          Add New User
        </h1>

        <div className="container bg-[#1D1D1D] rounded-lg ">
          <p className="mt-6 px-4 pt-4 ml-2 mb-2 text-lg uppercase font-pop flex">
            Enter the details below:
            {/* <FaArrowRightLong className="my-auto ml-3 text-lg" /> */}
          </p>
          <form
            className="flex flex-col gap-y-4 text-xl px-4 pb-8"
            onSubmit={handleFormSubmit}
          >
            <div className="nameAndPhone flex overflow-hidden">
              <label className="flex flex-col text-[#c3C3C3] text-[1rem]  w-full px-2 mt-3 justify-start font-bold mb-2">
                FULL NAME:
                <input
                  className="p-2 pl-3 font-int rounded-md outline-none font-light text-sm placeholder:text-slate-400 bg-slate-700 mt-1"
                  type="text"
                  name="NAME"
                  value={formData.NAME}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter Full Name of Customer"
                />
              </label>
            </div>

            <label className="flex flex-col text-[#c3C3C3] text-[1rem]  w-full px-2  justify-start font-bold mb-2">
              Phone Number:
              <input
                className="p-2 pl-3 font-int rounded-md outline-none font-light text-sm placeholder:text-slate-400 bg-slate-700 mt-1"
                type="text"
                name="PHONE"
                pattern="[0-9]*"
                inputMode="numeric"
                value={formData.PHONE}
                onChange={handleInputChange}
                required
                placeholder="Enter Mobile Number of Customer"
              />
            </label>
            <div className="cidAndstb flex overflow-hidden  mx-1 justify-between">
              <label className=" w-auto flex flex-col text-[#c3C3C3] text-[1rem]  px-2  justify-start font-bold mb-2">
                CUSTOMER ID:
                <input
                  className="w-36 p-2 pl-3 font-int rounded-md outline-none font-light text-sm placeholder:text-slate-400 bg-slate-700 mt-1"
                  type="text"
                  name="CUSTOMER_ID"
                  value={formData.CUSTOMER_ID}
                  onChange={handleInputChange}
                  placeholder="Enter CID"
                  required
                />
              </label>
              <label className="flex flex-col text-[#c3C3C3] text-[1rem]  w-auto  px-2  justify-start font-bold mb-2">
                STB ID:
                <input
                  className="w-36 p-2 pl-3 font-int rounded-md outline-none font-light text-sm placeholder:text-slate-400 bg-slate-700 mt-1"
                  type="text"
                  name="STB_ID"
                  value={formData.STB_ID}
                  onChange={handleInputChange}
                  placeholder="Enter STB ID"
                  required
                />
              </label>
            </div>

            <label className="flex flex-col text-[#c3C3C3] text-[1rem]  w-full px-2  justify-start font-bold mb-2">
              ADDRESS:
              <textarea
                rows="2"
                className=" block p-2 pl-3 font-int rounded-md outline-none font-light text-sm placeholder:text-slate-400 bg-slate-700 mt-1"
                type="text"
                name="ADDRESS"
                value={formData.ADDRESS}
                onChange={handleInputChange}
                placeholder="Enter Address of Customer"
                required
              />
            </label>

            <button
              type="submit"
              className="px-4 py-2 text-white bg-green-600 text-green mx-2 rounded-lg mt-4"
            >
              ADD USER{" "}
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default AddUserForm;
