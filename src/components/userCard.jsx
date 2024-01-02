import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserCard = ({ data, currentMonth }) => {
  const { id, NAME, PHONE, STB_ID } = data;
  return (
    <div>
      <Link to={`/user/${id}`}>
        <div className="bg-[#1D1D1D] p-4 rounded-md shadow-md border-gray-600 my-4 md:my-5 text-[#C3C3C3]">
          <div className="nameStatus flex justify-between">
            <div className="div">
              <div className="name text-xl font-semibold mb-4">{NAME}</div>
              <div className="phoneAndSTB flex gap-x-4 text-sm">
                <div className="phone flex text-xs">
                  <FaPhoneAlt className="my-auto mr-2" />
                  {PHONE}
                </div>
                <div className="stb overflow-hidden text-xs">STB: {STB_ID}</div>
              </div>
            </div>
            {data[currentMonth] === "" ? (
              <div className="unpaid">
                <div className="bg-red-500 w-[4.2rem] text-center text-white font-medium text-sm p-2 rounded-lg">
                  UNPAID
                </div>
              </div>
            ) : (
              <div className="paid">
                <div className="bg-green-500 w-[4.2rem] text-center  text-white font-medium text-sm p-2 rounded-lg">
                  PAID
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserCard;
