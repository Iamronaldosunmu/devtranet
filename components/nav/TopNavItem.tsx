import Link from 'next/link';

interface TopNavItemProps {
    name: string;
    path: string;
}

const TopNavItem : React.FC<TopNavItemProps> = ({name, path}) => {
    return (
        <div className="text-[18px]">
            <Link href={path}><span className='text-[#2D2D2D] font-bold opacity-80'>{name}</span></Link>
        </div>
    );
}
export default TopNavItem;