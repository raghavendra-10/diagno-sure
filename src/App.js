import "./App.css";
import "./App.css";
import Dentist from "./pages/Dentist";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Patients from "./pages/Patients";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dentist />,
  },
  {
    path: "/patients",
    element: <Patients />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
