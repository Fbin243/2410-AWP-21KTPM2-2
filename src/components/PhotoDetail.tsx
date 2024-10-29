import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPhotoById } from "../api/unsplash-api";
import { Photo } from "../utils/types";

const PhotoDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchPhotoById(id).then((data) => {
        setPhoto(data);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) return <p className="text-center p-4">Loading...</p>;

  if (!photo) return <p className="text-center p-4">Photo not found</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <button onClick={() => navigate(-1)} className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4">
        Back
      </button>
      <img src={photo.urls.full} alt={photo.alt_description || "Photo"} className="rounded-md w-full" />
      <h2 className="text-xl font-semibold mt-4">{photo.alt_description || "Untitled"}</h2>
      <p className="text-sm text-gray-700 mt-2">by {photo.user.name}</p>
      <p className="text-gray-600 mt-4">{photo.description || "No description available."}</p>
    </div>
  );
};

export default PhotoDetail;
