import Link from 'next/link';
import {Dispatch, SetStateAction} from 'react';

interface SideNavItemProps {
    name: string;
    iconPath: string;
    isActive: boolean;
    setActiveNav?: Dispatch<SetStateAction<string>>;
    isExtended?: boolean;
}

const SideNavItem : React.FC<SideNavItemProps> = ({name, iconPath, isActive, setActiveNav, isExtended}) => {
    return (
        <Link href={name == "My Projects" ? "projects" : name.toLocaleLowerCase()}>
            <div onClick={setActiveNav ? () => setActiveNav(name) : null} className={`transition-all flex gap-x-[22px] text-white items-center ${isActive ? "" : "opacity-50"} cursor-pointer`}>
                <img src={iconPath} />
                <span style={{opacity: isExtended ? (isActive ? 100 : 50) : 0}}>{name}</span>
            </div>
        </Link>
    )
}
export default SideNavItem;