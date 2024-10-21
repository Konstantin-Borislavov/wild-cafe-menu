import React, { useState, useEffect } from 'react';
import { Toggle } from './Toggle';
import menu from '../menu.json';

export const LifeInTechnicolour = () => {
    const [lifeInTechnicolour, setlifeInTechnicolour] = useState([]);

    useEffect(() => {
        setlifeInTechnicolour(menu.menu['Life-In-Technicolour']);
    }, []);

    return (
        
            <section className='life-in-techicolour'>
                {lifeInTechnicolour && lifeInTechnicolour.map((item, index) => (
                    <div className='food' key={index}>
                        <h3>{item.title + " -" + item.price} </h3>

                        <div>
                            <img src={item.image} loading='lazy' alt={item.title} />
                        </div>

                        <p>{item.descriptionEs}</p>
                        <i>{item.descriptionEn}</i>

                    </div>
                ))}
            </section>
       
    );
};
