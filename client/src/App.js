import "./App.css";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Pages/dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddEmployee from "./Pages/employee/AddEmployee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/addEmployee",
        element: <AddEmployee />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
