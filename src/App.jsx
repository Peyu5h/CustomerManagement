import { Routes, Route, Navigate } from "react-router-dom";
import AccessDenied from "./pages/AccessDenied";
import Auth from "./pages/Auth";
import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";
import { useAuth } from "./assets/context/AuthContext";

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <div className="h-screen w-full ">
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/accessDenied" element={<AccessDenied />} />

          {isAuthenticated ? (
            <>
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:id" element={<UserDetail />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/accessDenied" />} />
          )}
        </Routes>
      </div>
    </>
  );
};

export default App;
