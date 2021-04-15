import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomCatAxiosCancel = () => {
    const [randomCat, setRandomCat] = useState([]);

    useEffect(() => {
        // More informations about the cancelation for the axios library here : https://github.com/axios/axios#cancellation

        const source = axios.CancelToken.source();

        const fetchCats = async () => {
            try {
                const catdata = await axios.get("https://api.thecatapi.com/v1/images/search", { cancelToken: source.token });
                setRandomCat(catdata.data);
            } catch (err) {
                console.log("Catched error: " + err.message);
            }
        };
        setTimeout(() => {
            fetchCats();
        }, 3000);

        return () => source.cancel("Component got unmounted");
    }, []);

    return (
        <div>
            {randomCat.map(cat => {
                return (
                    <div key={Math.random() * Math.random()} style={{ display: 'flex', justifyContent: 'center', marginTop: '15vh' }}>
                        <img key={cat.id + cat.url} src={cat.url} alt="typical random cat" style={{ maxHeight: '50vh', maxWidth: '50vh' }} />
                    </div>
                );
            }
            )}
        </div>
    );
};

export default RandomCatAxiosCancel;