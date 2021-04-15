import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const LazyRandomPictures = () => {
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
                return <LazyLoadImage
                    effect="blur"
                    src={image.urls.regular}
                    alt={image.alt_description}
                    key={image.id}
                    height="500px"
                    width="400px"
                />;
            })}
        </div>
    );
};

export default LazyRandomPictures;