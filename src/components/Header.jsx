import Image from 'next/image';
import Menu from './Menu';



const Header = () => {
    return (
        <header className="flex items-center justify-between py-6 text-white mx-auto px-8">
            <div>
                <Image src="./favicon.svg" alt="Logo" width={45} height={45} />
            </div>
            <div className="flex items-center gap-5">
                <Menu />
            </div>
        </header>
    );
};

export default Header;
