// React
import React, { ReactElement } from 'react';

// Organisms
import Card from '../Organisms/Card'

// Templates
import Welcome from '../Templates/Welcome'

// Data
import Days from '../days.json';

const Home: React.FC = (): ReactElement => {
    return (
        <>
            <Welcome title="Learning Path" description="Lorem ipsum dolor sit amet consectetur adipisicing elit.    Necessitatibus excepturi modi laborum explicabo provident delectus itaque ab beatae! Accusamus, aperiam!" />
            <div className="container mx-auto md:px-5">
                <div className="md:flex md:flex-wrap md:-mx-5">
                    {Days.map((day, index) => (
                        <div className="md:w-1/3 px-5 mb-10" key={index}>
                            <Card title={day.title} date={day.date} id={day.id} image={day.smallImage} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;