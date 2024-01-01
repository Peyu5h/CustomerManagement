import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../assets/context/AuthContext";
import { FaArrowRight } from "react-icons/fa6";

const Auth = () => {
  const { login } = useAuth();
  const password = import.meta.env.VITE_PASS_KEY;

  const navigate = useNavigate();
  const [passKey, setPassKey] = useState("");

  const handleButtonClick = (value) => {
    setPassKey(passKey + value);
  };

  const handleChange = (e) => {
    setPassKey(e.target.value);
  };

  const handleSubmit = () => {
    if (passKey === password) {
      login();
      navigate("/users");
    } else {
      navigate("/accessDenied");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen w-full p-6">
      <div className="flex flex-col gap-y-5 items-center justify-center  ">
        <input
          className="bg-slate-700 mb-4 p-4 rounded-lg outline-none placeholder:text-lg text-lg w-40 mx-auto text-center"
          placeholder="Enter Password"
          type="text"
          name=""
          value={passKey}
          readOnly={true}
          onChange={handleChange}
        />
        <div className="flex flex-col gap-y-6">
          <div className="row1 flex gap-x-5">
            <div
              onClick={() => handleButtonClick("1")}
              className="one p-4 bg-orange-500 text-white font-semibold text-center rounded-full px-6 "
            >
              1
            </div>
            <div
              onClick={() => handleButtonClick("2")}
              className="one p-4 bg-orange-500 text-white font-semibold text-center rounded-full px-6 "
            >
              2
            </div>
            <div
              onClick={() => handleButtonClick("3")}
              className="one p-4 bg-orange-500 text-white font-semibold text-center rounded-full px-6 "
            >
              3
            </div>
          </div>
          <div className="row2 flex gap-x-5">
            <div
              onClick={() => handleButtonClick("4")}
              className="one p-4 bg-orange-500 text-white font-semibold text-center rounded-full px-6"
            >
              4
            </div>
            <div
              onClick={() => handleButtonClick("5")}
              className="one p-4 bg-orange-500 text-white font-semibold text-center rounded-full px-6"
            >
              5
            </div>
            <div
              onClick={() => handleButtonClick("6")}
              className="one p-4 bg-orange-500 text-white font-semibold text-center rounded-full px-6"
            >
              6
            </div>
          </div>
          <div className="row2 flex gap-5">
            <div
              onClick={() => handleButtonClick("7")}
              className="one p-4 bg-orange-500 text-white font-semibold text-center rounded-full px-6"
            >
              7
            </div>
            <div
              onClick={() => handleButtonClick("8")}
              className="one p-4 bg-orange-500 text-white font-semibold text-center rounded-full px-6"
            >
              8
            </div>
            <div
              onClick={() => handleButtonClick("9")}
              className="one p-4 bg-orange-500 text-white font-semibold text-center rounded-full px-6"
            >
              9
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-green-700 px-5 py-3 my-5 rounded-full flex text-lg"
        >
          Submit
          <FaArrowRight className="item-center my-auto ml-2 text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Auth;
