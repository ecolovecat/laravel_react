import ReactDOM from "react-dom/client";
import React from "react";
import App from "./components/App";


if (document.getElementById('employeeManager')) {
    const Index = ReactDOM.createRoot(document.getElementById("employeeManager"));

    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}
