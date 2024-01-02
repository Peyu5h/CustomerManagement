import { useState } from "react";

const DeleteUser = () => {
  const [userId, setUserId] = useState("");
  const [resultMessage, setResultMessage] = useState("");

  const handleInputChange = (e) => {
    setUserId(e.target.value);
  };

  const handleDeleteUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/delete?id=${userId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const text = await response.text();
        if (text) {
          const deletedUser = JSON.parse(text);
          setResultMessage(`User ${deletedUser.id} deleted successfully`);
        } else {
          setResultMessage("User deleted successfully");
        }
      } else {
        const errorData = await response.json();
        setResultMessage(`Error deleting user: ${errorData.error}`);
      }
    } catch (error) {
      setResultMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <label>
        User ID:
        <input
          type="text"
          value={userId}
          onChange={handleInputChange}
          placeholder="Enter User ID"
        />
      </label>
      <button onClick={handleDeleteUser}>Delete User</button>
      <p>{resultMessage}</p>
    </div>
  );
};

export default DeleteUser;
