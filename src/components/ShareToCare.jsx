import React, { useState, useEffect } from 'react';
//import { Toggle } from './Toggle';
import menu from '../menu.json';

export const SharetoCare = () => {
    const [shareToCare, setshareToCare] = useState([]);

    useEffect(() => {
        setshareToCare(menu.menu['Share-To-Care']);
    }, []);

    return (
        <div>
            {shareToCare.map((item, index) => (
                <div key={index}>
                    <h2>{item.titulo}</h2>
                </div>
            ))}
        </div>
    );
};
