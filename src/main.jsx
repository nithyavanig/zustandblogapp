import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Home } from "./Home";
import { About } from "./About";
import { Blogs } from "./Blogs";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import { CreateBlog } from "./CreateBlog";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
