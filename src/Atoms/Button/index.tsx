import React, { ReactElement } from 'react';

import IButton from './interface';

const Button: React.FC<IButton> = ({ link, url, target, className, fontSize, fontWeight, border, rounded, backgroundColor, textColor, borderColor, icon, type, onClick, children }): ReactElement<IButton> => {
    return(
        <>
            {link ? <a href={url} target={target} className={`
                focus:outline-none 
                ${fontSize ? `text-${fontSize}` : "text-base"}
                ${fontWeight ? `font-${fontWeight}` : "font-normal"}
                ${border && `border-${border}`}
                ${rounded === "rounded" ? "rounded" : `rounded-${rounded}`}
                ${textColor && `text-${textColor}`}
                ${backgroundColor && `bg-${backgroundColor}`}
                ${borderColor && `text-${borderColor}`}
                ${icon && "flex items-center"}
                ${className}`} rel="noreferrer">
                {children}
            </a> : 
            <button type={type} className={`
                focus:outline-none 
                ${fontSize ? `text-${fontSize}` : "text-base"}
                ${fontWeight ? `font-${fontWeight}` : "font-normal"}
                ${border && `border-${border}`}
                ${rounded === "rounded" ? "rounded" : `rounded-${rounded}`}
                ${textColor && `text-${textColor}`}
                ${backgroundColor && `bg-${backgroundColor}`}
                ${borderColor && `text-${borderColor}`}
                ${icon && "flex items-center"}
                ${className}`} onClick={onClick}>
                    {children}
            </button>}
        </>
    );
};

export default Button;