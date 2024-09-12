import React, { useState, useEffect } from 'react';
import { Toggle } from './Toggle';
import menu from '../menu.json';

export const Desserts = () => {
    const [desserts, setdesserts] = useState([]);

    useEffect(() => {
        setdesserts(menu.menu['Desserts']);
    }, []);

    return (
        <Toggle title={'HAPPINESS'}>
            <section className='desserts'>
                {desserts && desserts.map((item, index) => (
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
