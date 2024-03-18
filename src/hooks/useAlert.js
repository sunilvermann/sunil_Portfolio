// Create the custom hooks to show the alerts
import { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, text: "", text: "danger" });
  const showAlert = ({ text, type = "danger" }) =>
    setAlert({ show: true, text, type });
  const hideAlert = () => setAlert({ show: false, text: "", type: "danger" });
  return { alert, showAlert, hideAlert };
};

export default useAlert;
