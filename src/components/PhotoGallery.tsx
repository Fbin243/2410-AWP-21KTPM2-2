import React, { useEffect, useState } from "react";
import localPhotos from "../api/photos.json";
import { Photo } from "../utils/types";

interface PhotoGalleryProps {
  onSelectPhoto: (photo: Photo) => void;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onSelectPhoto }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    // fetchPhotos(10).then(setPhotos);
    setPhotos(localPhotos);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {photos.map((photo) => (
        <div key={photo.id} className="cursor-pointer" onClick={() => onSelectPhoto(photo)}>
          <img src={photo.urls.small} alt={photo.alt_description || "Photo"} className="rounded-md w-full" />
          <p className="text-sm text-gray-700 mt-2">{photo.user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
