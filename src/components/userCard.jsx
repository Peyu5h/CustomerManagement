import { FaPhoneAlt } from "react-icons/fa";

const UserCard = () => {
  return (
    <div>
      <div className="bg-[#1D1D1D] p-4 rounded-md shadow-md border-gray-600 my-4 text-[#C3C3C3]">
        <div className="nameStatus flex justify-between">
          <div className="div">
            <div className="name text-xl font-semibold mb-4">
              ASHOK SURYAVAUSHI
            </div>
            <div className="phoneAndSTB flex gap-x-4 text-sm">
              <div className="phone flex">
                <FaPhoneAlt className="my-auto mr-2" />
                9876543210
              </div>
              <div className="stb">STB: 3155890494</div>
            </div>
          </div>

          <div className="unpaid ">
            <span className="bg-red-500 text-white font-semibold p-2 rounded-lg">
              {" "}
              UNPAID
            </span>
          </div>
          {/* <div className="paid">PAID</div> */}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
