import React, { useState, useEffect } from 'react';
import { Toggle } from './Toggle';
import menu from '../menu.json';

export const GutInstinct = () => {
    const [gutInstinct, setgutInstinct] = useState([]);

    useEffect(() => {
        setgutInstinct(menu.menu['Gut-Instinct']);
    }, []);

    return (
       
            <section className='gut-instinct'>
                {gutInstinct && gutInstinct.map((item, index) => (
                    <div className='food' key={index}>
                        <h3>{item.title + " -" + item.price} </h3>

                        <div>
                            <img src={item.image} loading='lazy' alt={item.title} />
                        </div>

                        <p>{item.descriptionEs}</p>
                        <i>{item.descriptionEn}</i>

                    </div>
                ))}

                <div className='extras'>

                    <h3>EXTRAS</h3>
                    <br />
                    <p>Tofu orgánico · <i>Organic tofu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.00€</i></p>
                    <br />
                    <p>Langostinos · <i>Praws &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.50€</i></p>
                    <br />
                    <p>Salmón ahumado · <i>Smoked salmon&nbsp;&nbsp;&nbsp;&nbsp;4.50€</i></p>
                    <br />
                    <p>Salmón marinado · <i>Poke salmon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.50€</i></p>
                    <br />
                    <p>Salmón salteado · <i>Sautéed salmon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.50€</i></p>
                    <br />

                </div>
            </section>
        
    );
};
