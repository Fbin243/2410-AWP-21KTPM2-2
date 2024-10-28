import axios from "axios";
import { useEffect, useState } from "react";
import PhotoDetail from "./components/PhotoDetail";
import PhotoGrid from "./components/PhotoGrid";

function App() {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get("https://api.unsplash.com/photos", {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
          },
          params: {
            per_page: 12,
          },
        });
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="App">
      <h1>Unsplash Photo Gallery</h1>
      {selectedPhoto ? (
        <PhotoDetail photo={selectedPhoto} onBack={() => setSelectedPhoto(null)} />
      ) : (
        <PhotoGrid photos={photos} onSelectPhoto={setSelectedPhoto} />
      )}
    </div>
  );
}

export default App;
