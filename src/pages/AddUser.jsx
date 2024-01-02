import { useState } from "react";

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    NAME: "",
    PHONE: "",
    CUSTOMER_ID: "",
    STB_ID: "",
    ADDRESS: "",
  });

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
      const response = await fetch("http://localhost:3000/addUser", {
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
    } catch (error) {
      console.error("Error:", error);
      // Handle network errors or other issues
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        NAME:
        <input
          type="text"
          name="NAME"
          value={formData.NAME}
          onChange={handleInputChange}
        />
      </label>

      <label>
        PHONE:
        <input
          type="text"
          name="PHONE"
          value={formData.PHONE}
          onChange={handleInputChange}
        />
      </label>
      <label>
        CUSTOMER_ID:
        <input
          type="text"
          name="CUSTOMER_ID"
          value={formData.CUSTOMER_ID}
          onChange={handleInputChange}
        />
      </label>
      <label>
        STB_ID:
        <input
          type="text"
          name="STB_ID"
          value={formData.STB_ID}
          onChange={handleInputChange}
        />
      </label>
      <label>
        ADDRESS:
        <input
          type="text"
          name="ADDRESS"
          value={formData.ADDRESS}
          onChange={handleInputChange}
        />
      </label>

      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
