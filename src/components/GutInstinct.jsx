import React, { useState, useEffect } from 'react';
//import { Toggle } from './Toggle';
import menu from '../menu.json';

export const GutInstinct = () => {
    const [gutInstinct, setgutInstinct] = useState([]);

    useEffect(() => {
        setgutInstinct(menu.menu['Gut-Instinct']);
    }, []);

    return (
        <div>
            {gutInstinct.map((item, index) => (
                <div key={index}>
                    <h2>{item.titulo}</h2>
                </div>
            ))}
        </div>
    );
};
