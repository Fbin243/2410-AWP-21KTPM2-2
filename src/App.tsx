import React from "react";
import { Route, Routes } from "react-router-dom";
import PhotoDetail from "./components/PhotoDetail";
import PhotoGallery from "./components/PhotoGallery";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/photos" element={<PhotoGallery />} />
      <Route path="/photos/:id" element={<PhotoDetail />} />
    </Routes>
  );
};

export default App;
