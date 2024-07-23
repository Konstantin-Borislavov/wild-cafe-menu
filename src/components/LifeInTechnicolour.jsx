import React, { useState, useEffect } from 'react';
//import { Toggle } from './Toggle';
import menu from '../menu.json';

export const LifeInTechnicolour = () => {
    const [lifeInTechnicolour, setlifeInTechnicolour] = useState([]);

    useEffect(() => {
        setlifeInTechnicolour(menu.menu['Life-In-Technicolour']);
    }, []);

    return (
        <div>
            {lifeInTechnicolour.map((item, index) => (
                <div key={index}>
                    <h2>{item.titulo}</h2>
                </div>
            ))}
        </div>
    );
};
