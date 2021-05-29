import React, { ReactElement } from 'react'

import IBanner from './interface';

const Banner: React.FC<IBanner> = ({ image, alt, className }: IBanner): ReactElement<IBanner> => {
    return <img src={image} alt={alt} className={className} />
};

export default Banner;