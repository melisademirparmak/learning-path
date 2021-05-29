// Organisms
import Logo from '../../Organisms/Logo';
import Social from '../../Organisms/Social';

const Header = () => {
    return(
        <header className="py-10">
            <div className="container mx-auto px-5">
                <div className="flex items-center justify-between -mx-5">
                    <div className="px-5 w-56">
                        <Logo image="/logo.png" />
                    </div>
                    <div className="px-5">
                        <Social />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;