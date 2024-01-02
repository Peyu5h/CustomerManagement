import { Link } from "react-router-dom";

const AccessDenied = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-y-1 p-6">
      <h1 className="text-8xl font-black">403</h1>
      <h2 className="text-2xl font-semibold text-red-500 mb-1">
        Access Denied
      </h2>
      <p className="text-md font-medium mb-4 text-sm">
        You dont have permission to access this page
      </p>
      <Link to="/">
        <button className="py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg mt-2">
          Verify Again?
        </button>
      </Link>
    </div>
  );
};

export default AccessDenied;
