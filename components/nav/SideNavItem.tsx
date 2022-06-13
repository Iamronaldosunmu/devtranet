import {Dispatch, SetStateAction} from 'react';

interface SideNavItemProps {
    name: string;
    iconPath: string;
    isActive: boolean;
    setActiveNav?: Dispatch<SetStateAction<string>>;
}

const SideNavItem : React.FC<SideNavItemProps> = ({name, iconPath, isActive, setActiveNav}) => {
    return (
        <div onClick={setActiveNav ? () => setActiveNav(name) : null} className={`transition-all flex gap-x-[22px] text-white items-center ${isActive ? "" : "opacity-50"} cursor-pointer`}>
            <img src={iconPath} />
            <span style={{opacity: isActive ? 100 : 50}}>{name}</span>
        </div>
    )
}
export default SideNavItem;