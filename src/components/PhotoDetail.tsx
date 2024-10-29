import React from "react";
import { Photo } from "../utils/types";

interface PhotoDetailProps {
  photo: Photo;
  onClose: () => void;
}

const PhotoDetail: React.FC<PhotoDetailProps> = ({ photo, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg overflow-hidden w-full max-w-md">
      <img src={photo.urls.full} alt={photo.alt_description || "Detailed view"} className="w-full" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{photo.alt_description || "Untitled"}</h2>
        <p className="text-sm text-gray-700 mt-2">by {photo.user.name}</p>
        <p className="text-gray-600 mt-4">{photo.description || "No description available."}</p>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Close
        </button>
      </div>
    </div>
  </div>
);

export default PhotoDetail;
