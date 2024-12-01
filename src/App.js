import "./App.css";
import "./App.css";
import Dentist from "./pages/Dentist";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Patients from "./pages/Patient";
import PrivacyPolicy from "./sections/PrivacyPolicy";
import TermsOfUse from "./sections/TermsOfUse";
import Locations from "./pages/Locations";

const router = createBrowserRouter([
  {
    path: "/dentist",
    element: <Dentist />,
  },
  {
    path: "/",
    element: <Patients />,
  },
  {
    path: "/privacyPolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/termsOfUse",
    element: <TermsOfUse />,
  },
  {
    path: '/locations',
    element: <Locations />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
