import React, { ReactElement } from 'react'

// Atoms
import Button from '../../Atoms/Button';

// Icons
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Social: React.FC = (): ReactElement => {
    return(
        <ul className="flex flex-wrap">
            <li className="mr-5">
                <Button link={true} url="https://www.linkedin.com/in/melisa-demirparmak/" target="_blank" fontSize="2xl" backgroundColor="blue-900" textColor="white" className="px-3 py-4" rounded="lg" icon={true}>
                    <AiFillLinkedin />
                    <span className="ml-2">Linkedin</span>
                </Button>
            </li>
            <li>
                <Button link={true} url="https://github.com/melisademirparmak" target="_blank" fontSize="2xl" backgroundColor="white" textColor="black" className="px-3 py-4" rounded="lg" icon={true}>
                    <AiFillGithub />
                    <span className="ml-2">Github</span>
                </Button>
            </li>
        </ul>
    );
};

export default Social;