import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./Layout.jsx";
import { Provider } from "react-redux";
import { store } from "./store.mjs";
import TodoProvider from "./new-features/todo/provier.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoProvider>
      <Provider store={store}>
        <Layout>
          <App />
        </Layout>
      </Provider>
      </TodoProvider>
  </React.StrictMode>
);
