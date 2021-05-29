// React
import React, { ReactElement } from 'react'

// Interface
import IWelcome from './interface';

const Welcome: React.FC<IWelcome> = ({ title, description }: IWelcome): ReactElement<IWelcome> => {
    return(
        <section className="text-center mb-10 py-10 bg-theme-light">
            <div className="container mx-auto">
                <div className="md:flex md:justify-center">
                    <div className="md:w-3/4">
                        <h1 className="text-8xl mb-10 py-10">{title}</h1>
                        <p className="text-4xl">{description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;