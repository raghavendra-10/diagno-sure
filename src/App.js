import "./App.css";
import "./App.css";
import Dentist from "./pages/Dentist";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Patients from "./pages/Patient";
import PrivacyPolicy from "./sections/PrivacyPolicy";
import TermsOfUse from "./sections/TermsOfUse";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
