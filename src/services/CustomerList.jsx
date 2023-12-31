import { useState, useEffect } from "react";

const CustomerList = () => {
  const [customerData, setCustomerData] = useState([]);
  const [currentMonth, setCurrentMonth] = useState("");

  //to get currentMonth
  useEffect(() => {
    const currentDate = new Date();
    const Months = currentDate.toLocaleString("en-US", { month: "long" });
    setCurrentMonth(Months.toLowerCase());
  }, []);

  //fetch data from sheetdb
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://sheet.best/api/sheets/8d7b6f19-15e8-4464-8b11-768cdf585b17"
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

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdate = () => {
    try {
      fetch("https://sheetdb.io/api/v1/rc7vy0jfmhe30/id/7", {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            december: "456",
          },
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
      const timeoutId = setTimeout(() => {
        fetchData();
      }, 3000);
      return () => clearTimeout(timeoutId);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div>
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

              {row[currentMonth] === ("" || null) ? (
                <td>UNPAID</td>
              ) : (
                <td>PAID</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
