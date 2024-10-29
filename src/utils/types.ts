export interface Photo {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    full: string;
  };
  user: {
    name: string;
  };
  description: string | null;
}
