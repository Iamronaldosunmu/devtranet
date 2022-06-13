import Link from "next/link";
import { useState } from "react";
import NavSearch from "./NavSearch";
import TopNavIcon from "./TopNavIcon";
import TopNavItem from "./TopNavItem";

const TopNav = ({extendedNav, activeTopNav, setActiveTopNav}) => {
    return (
        <nav style={{width: extendedNav ? 'calc(100vw - 178px)' : 'calc(100vw - 74px)'}} className="transition-all fixed right-0 w-[calc(100vw-178px)] h-[120px] shadow-[0_2px_10px_0_rgba(0,0,0,0.3)] pl-[30px] pr-[45px] xl:pl-[45px] xl:pr-[60px]">
            <div className="flex h-full max-w-[1230px] items-center">
                <section className="flex flex-row gap-[20px] xl:gap-[40px] mr-[78px]">
                    <TopNavItem name="SCRAPBOOK" path="" isActive={activeTopNav == "scrapbook"} setActiveTopNav={setActiveTopNav}/>
                    <TopNavItem name="PROJECTS" path="" isActive={activeTopNav == "projects"} setActiveTopNav={setActiveTopNav}/>
                    <TopNavItem name="PEOPLE" path="" isActive={activeTopNav == "people"} setActiveTopNav={setActiveTopNav}/>
                    <TopNavItem name="JOBS" path="" isActive={activeTopNav == "jobs"} setActiveTopNav={setActiveTopNav}/> 
                </section>
                <div className="flex flex-row gap-x-[24px] w-full max-w-[950px] justify-end">
                    <NavSearch />
                    <section className="flex flex-row gap-x-[22px]">
                        <TopNavIcon iconPath="./assets/messagesIcon.svg" href="/messages"/>
                        <TopNavIcon iconPath="./assets/darkModeIcon.svg"/>
                        <TopNavIcon iconPath="./assets/notificationsIcon.svg" href="/notifications" newNotifications={true}/>
                    </section>
                </div>
            </div>
        </nav>
    );
}
export default TopNav;