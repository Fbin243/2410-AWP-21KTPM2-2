import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPhotos } from "../api/unsplash-api";
import { Photo } from "../utils/types";
import Loading from "./Loading";

const PhotoGallery: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMorePhotos = async () => {
    setLoading(true);
    const newPhotos = await fetchPhotos(page);
    if (newPhotos.length === 0 || page >= 10) setHasMore(false);
    setPhotos((prev) => [...prev, ...newPhotos]);
    setLoading(false);
  };

  useEffect(() => {
    loadMorePhotos();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && hasMore && !loading) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5  p-4">
      {photos.map((photo) => (
        <Link to={`/photos/${photo.id}`} key={photo.id} className="cursor-pointer">
          <img
            src={photo.urls.small}
            alt={photo.alt_description || "Photo"}
            className="rounded-md object-cover aspect-square"
          />
          <p className="text-sm text-gray-500 mt-2">{photo.user.name}</p>
        </Link>
      ))}
      {loading && <Loading />}
      {!hasMore && (
        <p className="text-center w-full">
          No more photos to load. (I have limited API calls for preventing over 50 times per day.)
        </p>
      )}
    </div>
  );
};

export default PhotoGallery;
