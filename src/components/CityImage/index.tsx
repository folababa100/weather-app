import React, { useEffect, useState } from 'react';

import axios from 'axios';

interface CityImageProps {
  city: string;
}

const accessKey = import.meta.env.VITE_UNSPLASH_API_KEY as string;

const CityImage: React.FC<CityImageProps> = ({ city }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (city) {
      (async () => {
        try {
          const url = `https://api.unsplash.com/search/photos?page=1&query=${city}&client_id=${accessKey}`;
          const response = await axios.get(url);
          const firstImage = response.data.results[0];

          if (firstImage) {
            setImageUrl(firstImage.urls.regular);
          }
        } catch (error) {
          console.error("Couldn't fetch city image", error);
        }
      })();
    }
  }, [city]);

  return (
    <div>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`View of ${city}`}
          style={{ width: '100%', height: 'auto' }}
        />
      ) : (
        <p>No image available</p>
      )}
    </div>
  );
};

export default CityImage;
