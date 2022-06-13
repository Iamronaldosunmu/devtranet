import { useRouter } from "next/router";
import { useState } from "react";
import SideNavItem from "./SideNavItem";

const SideNav = ({activeNav, setActiveNav, extended}) => {
    return (
        <nav style={{width: extended ? '178px' : '74px'}} className={"transition-all fixed left-0 pt-[35px] bg-[#5F6FEE] h-screen "}>
            <div className="flex justify-center mb-[60px]">
                {extended && <img src="./assets/dynamicsLogo.svg" />}
                {!extended && <img src="./assets/dynamicsLogoNoText.svg" />}
            </div>
            <section className="flex flex-col gap-y-[40px] pl-[27px] mb-[90px]">
                <SideNavItem isExtended={extended} setActiveNav={setActiveNav} name="Home" iconPath="./assets/homeIcon.svg" isActive={activeNav == "Home"} />
                <SideNavItem isExtended={extended} setActiveNav={setActiveNav} name="Community" iconPath="./assets/communityIcon.svg" isActive={activeNav == "Community"} />
                <SideNavItem isExtended={extended} setActiveNav={setActiveNav} name="Workshops" iconPath="./assets/workshopsIcon.svg" isActive={activeNav == "Workshops"} />
                <SideNavItem isExtended={extended} setActiveNav={setActiveNav} name="My Projects" iconPath="./assets/myProjectsIcon.svg" isActive={activeNav == "My Projects"} />
                <SideNavItem isExtended={extended} setActiveNav={setActiveNav} name="Events" iconPath="./assets/eventsIcon.svg" isActive={activeNav == "Events"} />
                <SideNavItem isExtended={extended} setActiveNav={setActiveNav} name="Blog" iconPath="./assets/blogIcon.svg" isActive={activeNav == "Blog"} />
                <SideNavItem isExtended={extended} setActiveNav={setActiveNav} name="Settings" iconPath="./assets/settingsIcon.svg" isActive={activeNav == "Settings"} />
            </section>
            <div className="pl-[27px]">
                <SideNavItem name="Logout" iconPath="./assets/logoutIcon.svg" isActive={true} isExtended={extended}/>
            </div>
        </nav>
    );
}

export default SideNav;