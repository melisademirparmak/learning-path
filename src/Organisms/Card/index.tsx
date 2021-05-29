// React
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

// Interface
import ICard from './interface';

// Molecules
import Banner from '../../Molecules/Banner';

const Card: React.FC<ICard> = ({ title, image, id, date }: ICard): ReactElement<ICard> => {
    return(
        <figure className="p-5 rounded-lg card">
            <div>
                <Banner image={image} alt={title} className="h-80 object-cover w-full rounded-lg" />
            </div>
            <figcaption className="text-center py-5">
                <h1 className="text-white text-3xl font-semibold mb-3">{title}</h1>
                <p className="text-gray-600 text-2xl mb-5 pb-5 border-b">{date}</p>
                <Link to={`/day/${id}`} className="block rounded-full text-white text-2xl py-4 theme-button-orange">View</Link>
            </figcaption>
        </figure>
    );
};

export default Card;