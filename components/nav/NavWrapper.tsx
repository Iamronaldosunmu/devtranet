import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { useState } from 'react';
import { useRouter } from "next/router";

const NavWrapper = ({children}) => {
    const [activeSideNav, setActiveSideNav] = useState("Home");
    const [setActiveTopNav] = useState("");
    const router = useRouter();
    const [extended, setExtended] = useState(router.pathname !== "/messages");
    return (
    <>
        <SideNav activeNav={activeSideNav} setActiveNav={setActiveSideNav} extended={extended}/>
        <TopNav setActiveTopNav={setActiveTopNav} extendedNav={extended}/>
        <div style={{marginLeft : extended ? 178 : 64, width: extended ? 'calc(100vw - 178px)' : 'calc(100vw - 74px)'}} className="transition-all pt-[120px] pl-[30px] pr-[45px] xl:pl-[45px] xl:pr-[60px]">
            {children}
        </div>
    </>
    );

}
export default NavWrapper;