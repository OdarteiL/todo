import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import DashboardLayout from "./components/DashboardLayout";
import Setting from "./components/Setting";

const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route index element={<App />} />
      </Route>
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="setting"  element={<Setting />} />
      </Route>
    </>
  )
);

export default AppRouter;
