const menu = [
    {
        name: 'About',
        href: '#about',
    },
    {
        name: 'Skill',
        href: '#skill',
    },
    {
        name: 'Portfolio',
        href: '#portfolio',
    },
    {
        name: 'Contact',
        href: '#contact',
    },
    {
        name: 'Blog',
        href: '#blog',
    },
];
const Menu = () => {
    return (
        <nav>
            <ul className="flex uppercase text-lg space-x-7">
                {menu.map((item, index) => (
                    <li key={index}>
                        <a
                            href={item.href}
                            className="text-white"
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
