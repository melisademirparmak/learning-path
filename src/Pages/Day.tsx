// React
import React, { ReactElement } from 'react';
import { RouteComponentProps } from "react-router-dom";

// Atoms
import Button from '../Atoms/Button'

// Data
import Days from '../days.json';

// Interface
interface RouteParams {
    id: any;
}

interface IDay extends RouteComponentProps<RouteParams> {
    id: any;
}


const Day: React.FC<IDay> = ({match}): ReactElement => {
    const Day = Days.filter(day => (day.id === Number(match.params.id)))[0];

    return(
        <>
            <div className="container mx-auto px-10">
                <div className="mb-10">
                    <img src={Day.bigImage} alt={Day.title} className="h-600 object-top object-cover w-full" />
                </div>
                <div className="md:flex md:flex-wrap md:-mx-10">
                    <div className="md:flex-1 px-10">
                        <h1 className="text-white text-5xl font-semibold mb-5">{Day.title}</h1>
                        <p className="text-2xl text-gray-600 mb-10">{Day.date}</p>
                        <ul className="flex flex-wrap mb-10 -mx-5">
                            {Day.tags.map((tag, index) => (
                                <li className="px-5" key={index}>
                                    <span className="bg-theme-light text-white text-4xl px-5 py-2 rounded-lg block">{tag}</span>
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-wrap mb-10 -mx-5">
                            {Day.colors.map((color, index) => (
                                <li className="px-5" key={index}>
                                    <span style={{
                                        backgroundColor: color
                                    }} className="bg-theme-light text-white text-4xl px-5 py-2 rounded-lg block">{color}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="px-10">
                        <div className="md:flex md:items-center md:-mx-5">
                            <div className="mb-5 md:mb-0 md:mr-5">
                                <Button link={true} url={`https://github.com/melisademirparmak/${Day.url}`} fontSize="2xl"textColor="white" rounded="full" className="py-5 px-10 theme-orange" target="_blank">Kodlara Ulaşmak İçin Tıkla</Button>
                            </div>
                            <div>
                                <Button link={true} url={Day.demo} fontSize="2xl" backgroundColor="blue-500" textColor="white" rounded="full" className="py-5 px-10" target="_blank">Demo için tıkla</Button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default Day;