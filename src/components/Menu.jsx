import Link from "next/link";

const menu = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skill', href: '#skill' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: 'https://blog.gausalmunir.xyz', target: '_blank' },
];

const Menu = ({ mobile = false }) => {
    return (
        <nav>
            <ul className={`flex ${mobile ? 'flex-col' : 'flex-row'} items-center uppercase text-md ${mobile ? 'space-y-8' : 'space-x-7'}`}>
                {menu.map((item, index) => (
                    <li key={index}>
                        <Link href={item.href} target={item.target} className="text-white hover:text-green-500 transition-colors">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
