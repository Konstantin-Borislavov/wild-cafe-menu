import React, { useState, useEffect } from 'react';
//import { Toggle } from './Toggle';
import menu from '../menu.json';

export const MorningBoosters = () => {
    const [morningBoosters, setMorningBoosters] = useState([]);

    useEffect(() => {
        setMorningBoosters(menu.menu['Morning-Boosters']);
    }, []);

    return (
        <div>
            {morningBoosters.map((item, index) => (
                <div key={index}>
                    <h2>{item.titulo}</h2>
                    <img src={item.imagen} alt="" />
                </div>
            ))}
        </div>
    );
};
