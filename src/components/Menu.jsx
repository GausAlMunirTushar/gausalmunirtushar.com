const menu = [
    {
        name: 'About',
        href: '#about',
    },
    {
        name: "Experience",
        href: '#experience',
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
            <ul className="flex items-center uppercase text-md space-x-7">
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
            <button className="border-2 border-primary text-white uppercase py-1.5 px-4 rounded">Resume</button>
            </ul>
        </nav>
    );
};

export default Menu;
