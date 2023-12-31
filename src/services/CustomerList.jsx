import { useState, useEffect } from "react";

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
  ];

  const handleInputChange = (field, value) => {
    setUpdateData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  //to get currentMonth
  useEffect(() => {
    const currentDate = new Date();
    const Months = currentDate.toLocaleString("en-US", { month: "long" });
    setCurrentMonth(Months.toLowerCase());
  }, []);

  //fetch data from db
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

  useEffect(() => {
    fetchData();
  }, []);

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

      // Handle successful update, e.g., show a success message or redirect
      console.log("Data updated successfully");
    } catch (error) {
      console.error("Error updating data:", error);
      // Handle error, e.g., show an error message to the user
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
    </div>
  );
};

export default CustomerList;
