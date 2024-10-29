import React, { useState } from "react";
import PhotoDetail from "./components/PhotoDetail";
import PhotoGallery from "./components/PhotoGallery";
import { Photo } from "./utils/types";

const App: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-center py-4 bg-blue-500 text-white font-bold text-xl">Unsplash Photo Gallery</header>
      <main className="container mx-auto">
        <PhotoGallery onSelectPhoto={setSelectedPhoto} />
        {selectedPhoto && <PhotoDetail photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />}
      </main>
    </div>
  );
};

export default App;
