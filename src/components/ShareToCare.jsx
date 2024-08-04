import React, { useState, useEffect } from 'react';
//import { Toggle } from './Toggle';
import menu from '../menu.json';

export const SharetoCare = () => {
    const [shareToCare, setshareToCare] = useState([]);

    useEffect(() => {
        setshareToCare(menu.menu['Share-To-Care']);
    }, []);

    return (
        <div className='share-to-care'>
        {shareToCare && shareToCare.map((item, index) => (
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
