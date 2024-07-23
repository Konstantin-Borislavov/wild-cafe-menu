import React, { useState, useEffect } from 'react';
//import { Toggle } from './Toggle';
import menu from '../menu.json';

export const Desserts = () => {
    const [desserts, setdesserts] = useState([]);

    useEffect(() => {
        setdesserts(menu.menu['Desserts']);
    }, []);

    return (
        <div>
            {desserts.map((item, index) => (
                <div key={index}>
                    <h2>{item.titulo}</h2>
                </div>
            ))}
        </div>
    );
};
