import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/User";
import NotFoundPage from "./pages/NotFound";
import Product from "./pages/Product";
import Photo from "./pages/Photo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/user" element={<User />} />
        <Route path="/product" element={<Product />} />
        <Route path="/photo" element={<Photo />} />
      </Routes>
    </Router>
  );
};

export default App;
