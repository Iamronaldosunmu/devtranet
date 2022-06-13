import Link from 'next/link';
import {Dispatch, SetStateAction} from 'react';


interface TopNavItemProps {
    name: string;
    path: string;
    isActive: boolean;
    setActiveTopNav: Dispatch<SetStateAction<string>>;
}

const TopNavItem : React.FC<TopNavItemProps> = ({name, path, isActive, setActiveTopNav}) => {
    return (
        <div onClick={() => setActiveTopNav(name.toLocaleLowerCase())} className="text-[18px] cursor-pointer">
            <Link href={path}><span style={{color: isActive ? '#5F6FEE' : '#2D2D2D'}} className='transition-all font-bold opacity-80'>{name}</span></Link>
        </div>
    );
}
export default TopNavItem;