import React, { useState, useEffect } from 'react';
import { Toggle } from './Toggle';
import menu from '../menu.json';
import '../App.css'

export const MorningBoosters = () => {
    const [morningBoostersSweet, setMorningBoostersSweet] = useState([]);
    const [morningBoostersSalt, setMorningBoostersSalt] = useState([]);

    useEffect(() => {
        setMorningBoostersSweet(menu.menu['Morning-Boosters-sweet']);
    }, []);

    useEffect(() => {
        setMorningBoostersSalt(menu.menu['Morning-Boosters-salt']);
    }, []);

    return (
        <Toggle title={'MORNING BOOSTERS'}>
            <>
                <section className='morning-boosters'>
                    {morningBoostersSweet && morningBoostersSweet.map((item, index) => (
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

                        <h3>AÑADE TOPPINGS</h3>
                        <h3><i>ADD TOPPINGS</i></h3>
                        <br />
                        <p>Dulce de leche&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.50€</p>
                        <br />
                        <p>Nutella vegana&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.00€</p>
                        <i>Vegan Nutella&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.00€</i>
                        <br />
                        <br />
                        <p>Mantequilla de cacahuete&nbsp;&nbsp;&nbsp;&nbsp;2.00€</p>
                        <i>Peanut butter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.00€</i>
                        <br />
                        <br />
                        <p>Mermelada de fresa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.00€</p>
                        <i>Strawberry jam&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.00€</i>
                        <br /><br />

                    </div>
                </section>

                <section className='morning-boosters'>
                    {morningBoostersSalt && morningBoostersSalt.map((item, index) => (
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
                        <p>Avocado · <i>Avocado&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.50€</i></p>
                        <br />
                        <p>Huevo pochado · <i>Poched egg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.80€</i></p>
                        <br />
                        <p>Salmón ahumado · <i>Smoked salmon&nbsp;&nbsp;&nbsp;&nbsp;4.50€</i></p>
                        <br />
                        <p>Salmón marinado · <i>Poke salmon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.50€</i></p>
                        <br />
                        <p>Salmón salteado · <i>Sautéed salmon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.50€</i></p>
                        <br />

                    </div>
                </section>
            </>
        </Toggle>
    );
};
