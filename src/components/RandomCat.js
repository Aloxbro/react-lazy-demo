import React, { useState, useEffect } from 'react';
import axios from 'axios';



const RandomCat = () => {
    const [randomCat, setRandomCat] = useState([]);

    useEffect(() => {
        const fetchCats = async () => {
            try {
                const catdata = await axios.get("https://api.thecatapi.com/v1/images/search");
                setRandomCat(catdata.data);
            } catch (err) {
                console.log("Catched error: " + err.message);
            }
        };
        setTimeout(() => {
            fetchCats();
        }, 3000);

    }, []);

    return (
        <div>
            {randomCat.map(cat => {
                return (
                    <div key={Math.random() * Math.random()} style={{ display: 'flex', justifyContent: 'center', marginTop: '15vh' }}>
                        <img key={cat.id} src={cat.url} alt="typical random cat" style={{ maxHeight: '50vh', maxWidth: '50vh' }} />
                    </div>
                );
            }
            )}
        </div>
    );
};

export default RandomCat;