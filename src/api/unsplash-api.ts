import axios from "axios";
import { Photo } from "../utils/types";

const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchPhotos = async (page: number): Promise<Photo[]> => {
  // return photos;
  const response = await axios.get("https://api.unsplash.com/photos", {
    headers: { Authorization: `Client-ID ${accessKey}` },
    params: { page, per_page: 10 },
  });
  return response.data;
};

export const fetchPhotoById = async (id: string): Promise<Photo> => {
  // return photos.slice(0, 1)[0];
  const response = await axios.get(`https://api.unsplash.com/photos/${id}`, {
    headers: { Authorization: `Client-ID ${accessKey}` },
  });
  return response.data;
};
