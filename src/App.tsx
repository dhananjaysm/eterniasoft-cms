import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import ProtectedRoute from "./layout/ProtectedRoute";
import SignIn from "./pages/authentication/SignInPage";
import Loader from "./components/common/Loader";
import { AuthProvider } from "./context/AuthContext";
import { useEffect, useState } from "react";
import LayoutWithSidebar from "./layout/withSidebar";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/settings/Settings";
import Products from "./pages/products/Products";
import Packages from "./pages/plans/Plans";
import Plans from "./pages/plans/Plans";
import CreatePlan from "./pages/plans/CreatePlan";
import ViewEditPlan from "./pages/plans/ViewEditPlan";

function App() {
  //page refresh at any location is leading me to root page
  const [loading, setLoading] = useState<boolean>(true);
  // console.log(import.meta.env.VITE_API_KEY);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <LayoutWithSidebar />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" index element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/products" element={<Products />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/plans/create" element={<CreatePlan />} />
            <Route path="/plans/view/:planId" element={<ViewEditPlan />} />
            
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
