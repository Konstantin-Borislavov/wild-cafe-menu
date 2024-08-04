import React, { useState, useEffect } from 'react';
//import { Toggle } from './Toggle';
import menu from '../menu.json';

export const GutInstinct = () => {
    const [gutInstinct, setgutInstinct] = useState([]);

    useEffect(() => {
        setgutInstinct(menu.menu['Gut-Instinct']);
    }, []);

    return (
        <div className='gut-instinct'>
        {gutInstinct && gutInstinct.map((item, index) => (
            <div key={index}>
                <h2>{item.title}</h2>

                <div>
                <img src={item.image} alt= {item.title} />
                </div>

                <p>{item.descriptionEs}</p>
                <i>{item.descriptionEn}</i>

            </div>
        ))}
    </div>
    );
};
