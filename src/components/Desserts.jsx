import React, { useState, useEffect } from 'react';
//import { Toggle } from './Toggle';
import menu from '../menu.json';

export const Desserts = () => {
    const [desserts, setdesserts] = useState([]);

    useEffect(() => {
        setdesserts(menu.menu['Desserts']);
    }, []);

    return (
        <div className='desserts'>
        {desserts && desserts.map((item, index) => (
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
