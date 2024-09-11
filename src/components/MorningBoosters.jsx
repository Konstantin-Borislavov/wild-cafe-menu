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
                </section>
            </>
        </Toggle>
    );
};
