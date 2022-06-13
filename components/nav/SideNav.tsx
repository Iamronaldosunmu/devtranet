import { useState } from "react";
import Logo from "../../public/assets/dynamicsLogo.svg";
import SideNavItem from "./SideNavItem";

const SideNav = (props) => {
    const [activeNav, setActiveNav] = useState("Home");
    return (
        <nav className="fixed left-0 pt-[35px] w-[178px] bg-[#5F6FEE] h-screen ">
            <div className="flex justify-center mb-[60px]">
                <img src="./assets/dynamicsLogo.svg" />
            </div>
            <section className="flex flex-col gap-y-[40px] pl-[27px] mb-[90px]">
                <SideNavItem setActiveNav={setActiveNav} name="Home" iconPath="./assets/homeIcon.svg" isActive={activeNav == "Home"} />
                <SideNavItem setActiveNav={setActiveNav} name="Community" iconPath="./assets/communityIcon.svg" isActive={activeNav == "Community"} />
                <SideNavItem setActiveNav={setActiveNav} name="Workshops" iconPath="./assets/workshopsIcon.svg" isActive={activeNav == "Workshops"} />
                <SideNavItem setActiveNav={setActiveNav} name="My Projects" iconPath="./assets/myProjectsIcon.svg" isActive={activeNav == "My Projects"} />
                <SideNavItem setActiveNav={setActiveNav} name="Events" iconPath="./assets/eventsIcon.svg" isActive={activeNav == "Events"} />
                <SideNavItem setActiveNav={setActiveNav} name="Blog" iconPath="./assets/blogIcon.svg" isActive={activeNav == "Blog"} />
                <SideNavItem setActiveNav={setActiveNav} name="Settings" iconPath="./assets/settingsIcon.svg" isActive={activeNav == "Settings"} />
            </section>
            <div className="pl-[27px]">
                <SideNavItem name="Logout" iconPath="./assets/logoutIcon.svg" isActive={true}/>
            </div>
        </nav>
    );
}

export default SideNav;