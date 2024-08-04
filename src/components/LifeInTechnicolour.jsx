import React, { useState, useEffect } from 'react';
//import { Toggle } from './Toggle';
import menu from '../menu.json';

export const LifeInTechnicolour = () => {
    const [lifeInTechnicolour, setlifeInTechnicolour] = useState([]);

    useEffect(() => {
        setlifeInTechnicolour(menu.menu['Life-In-Technicolour']);
    }, []);

    return (
        <div className='life-in-techicolour'>
            {lifeInTechnicolour && lifeInTechnicolour.map((item, index) => (
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
