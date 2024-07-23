import React, { useState, useEffect } from 'react';
//import { Toggle } from './Toggle';
import menu from '../menu.json';

export const Diversity = () => {
    const [diversity, setdiversity] = useState([]);

    useEffect(() => {
        setdiversity(menu.menu['Diversity']);
    }, []);

    return (
        <div>
            {diversity.map((item, index) => (
                <div key={index}>
                    <h2>{item.titulo}</h2>
                </div>
            ))}
        </div>
    );
};
