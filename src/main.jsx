import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./contexts/AuthContext.jsx";
import ProductContextProvider from "./contexts/ProductContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ProductContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </ProductContextProvider>

  // </React.StrictMode>,
);
