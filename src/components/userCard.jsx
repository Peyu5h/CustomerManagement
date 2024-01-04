import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserCard = ({ data, currentMonth, onDeleteUser }) => {
  const { id, NAME, PHONE, STB_ID } = data;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteUser = async () => {
    try {
      onDeleteUser();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {currentMonth === "delete" ? (
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
            {currentMonth === "delete" ? (
              <button
                onClick={openModal}
                className="bg-red-500 w-[4.8rem] text-center my-auto text-white font-semibold font-pop  p-3 py-4 text-md rounded-lg"
              >
                DELETE
              </button>
            ) : (
              <div>
                {data[currentMonth] === "" ? (
                  <div className="unpaid">
                    <div className="bg-red-500 w-[4.2rem] text-center text-white font-medium text-sm p-2 rounded-lg">
                      UNPAID
                    </div>
                  </div>
                ) : (
                  <div className="paid">
                    <div className="bg-green-500 w-[4.2rem] text-center text-white font-medium text-sm p-2 rounded-lg">
                      PAID
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          {isModalOpen && (
            <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="bg-white p-8 max-w-md w-full rounded shadow-lg z-10 mx-4">
                <h2 className="text-2xl font-bold mb-4 text-slate-700">
                  Confirm Deletion
                </h2>
                <p className="text-gray-700 mb-6">
                  Are you sure you want to delete this user?
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={closeModal}
                    className="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteUser}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
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
                  <div className="stb overflow-hidden text-xs">
                    STB: {STB_ID}
                  </div>
                </div>
              </div>
              {currentMonth === "delete" ? (
                <div className="bg-red-500 w-[4.2rem] text-center my-auto text-white font-medium text-sm p-3 rounded-lg">
                  DELETE
                </div>
              ) : (
                <div>
                  {data[currentMonth] === "" ? (
                    <div className="unpaid">
                      <div className="bg-red-500 w-[4.2rem] text-center text-white font-medium text-sm p-2 rounded-lg">
                        UNPAID
                      </div>
                    </div>
                  ) : (
                    <div className="paid">
                      <div className="bg-green-500 w-[4.2rem] text-center text-white font-medium text-sm p-2 rounded-lg">
                        PAID
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

UserCard.propTypes = {
  data: PropTypes.object,
  currentMonth: PropTypes.string,
  onDeleteUser: PropTypes.func,
  onDeleteResponse: PropTypes.func,
  id: PropTypes.string,
  NAME: PropTypes.string,
  PHONE: PropTypes.string,
  STB_ID: PropTypes.string,
};

export default UserCard;
