import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomerList = () => {
  const [customerData, setCustomerData] = useState([]);
  const [currentMonth, setCurrentMonth] = useState("");
  const [updateData, setUpdateData] = useState({});
  const fieldsToUpdate = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
    "january_balance",
  ];

  const handleInputChange = (field, value) => {
    setUpdateData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
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
      mobile: true,
    });
  };

  //to get currentMonth
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

  //function to update data
  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:3000/update/4`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        throw new Error("Update failed");
      }

      // Success: show success toast
      notify("Data updated successfully", "success ");
      console.log("Data updated successfully");
    } catch (error) {
      // Error: show error toast
      notify("Error updating data", "error");
      console.error("Error updating data:", error);
    }
  };

  return (
    <div>
      {fieldsToUpdate.map((field) => (
        <input
          key={field}
          type="text"
          placeholder={field}
          value={updateData[field] || ""}
          onChange={(e) => handleInputChange(field, e.target.value)}
        />
      ))}
      <button className="bg-slate-300 p-2" onClick={handleUpdate}>
        UPDATE
      </button>
      <h1>Customer List</h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {customerData.map((row, index) => (
            <tr key={index}>
              <td>{row.NAME}</td>
              <td>{row.STB_ID}</td>

              {row[currentMonth] === "" ? <td>UNPAID</td> : <td>PAID</td>}
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default CustomerList;
