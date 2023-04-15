import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Weather() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/group?id=6167865,6077243,6173331&units=metric&appid=f5dcee5df482f60416ba0a008e8a66d0`
            )
            .then((response) => {
                setWeatherData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            {weatherData ? (
                <div>
                    {weatherData.list.map((item) => (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <p>{item.weather[0].description}</p>
                            <p>{item.main.temp}°C</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Weather;
