// import CustomerList from "./services/CustomerListOLD";
import { Route, Routes } from "react-router-dom";
import UserDetail from "./pages/UserDetail";
import UserList from "./pages/UserList";
const App = () => {
  return (
    <div className="h-screen w-full p-6">
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
};

export default App;
