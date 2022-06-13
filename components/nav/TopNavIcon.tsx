import Link from "next/link";

interface TopNavIconProps {
    iconPath: string;
    newNotifications?: boolean;
    href?: string;
}

const TopNavIcon : React.FC<TopNavIconProps> = ({iconPath, newNotifications, href}) => {
    return (
        <Link href={href ? href : ""}>
            <div className="relative w-[50px] h-[50px] flex items-center justify-center bg-white rounded-full shadow-[0_0_15px_0_rgba(0,0,0,0.15)] cursor-pointer">
                <img src={iconPath} className="opacity-[0.5]"/>
                {newNotifications && <div className="absolute top-[13px] right-[13px] w-[10px] h-[10px] rounded-full bg-[#04C604]"></div>}
            </div>
        </Link>
    );
}
export default TopNavIcon;