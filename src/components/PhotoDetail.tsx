import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPhotoById } from "../api/unsplash-api";
import { Photo } from "../utils/types";
import Loading from "./Loading";

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

  if (loading) return <Loading />;

  if (!photo) return <p className="text-center p-4">Photo not found</p>;

  return (
    <div className="p-4">
      <div className="flex flex-col justify-center items-center">
        <img src={photo.urls.full} alt={photo.alt_description || "Photo"} className="rounded-md h-[500px]" />
        <h2 className="text-xl font-semibold mt-4">{photo.alt_description || "Untitled"}</h2>
        <p className="text-sm text-gray-500 mt-2">
          by <strong>{photo.user.name}</strong>{" "}
        </p>
        <p className="text-gray-600 my-4">{photo.description || "No description available."}</p>
        <button onClick={() => navigate(-1)} className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4">
          Back
        </button>
      </div>
    </div>
  );
};

export default PhotoDetail;
