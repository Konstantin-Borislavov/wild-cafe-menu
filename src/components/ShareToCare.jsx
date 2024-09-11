import React, { useState, useEffect } from 'react';
import { Toggle } from './Toggle';
import menu from '../menu.json';

export const SharetoCare = () => {
    const [shareToCare, setshareToCare] = useState([]);

    useEffect(() => {
        setshareToCare(menu.menu['Share-To-Care']);
    }, []);

    return (
        <Toggle title={'SHARE TO CARE'}>
            <section className='share-to-care'>
                {shareToCare && shareToCare.map((item, index) => (
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
        </Toggle>
    );
};
