import React, { ReactElement } from 'react';

import ILogo from './interface';

const Logo: React.FC<ILogo> = ({ image, text, className }): ReactElement<ILogo> => {
    return (
        <a href="/" className={`text-5xl font-semibold ${className}`}>
            {image ? <img className= "img-with" src={image} alt="Logo" /> : text}
        </a>
    );
};

export default Logo;