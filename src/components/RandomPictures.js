import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RandomPictures = () => {
    const url = "https://api.unsplash.com/photos/random?client_id=fr5aMJfqs6ZUbMDcO1AVoCMGXtCqS6CE5UBDkqNnSas&count=50";
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const res = await axios.get(url);
        setImages(res.data);
    };

    useEffect(() => {
        getImages();
    }, []);

    return (
        <div>
            {images.map((image) => {
                return <img src={image.urls.regular} alt={image.alt_description} key={image.id} />;
            })}
        </div>
    );
};

export default RandomPictures;