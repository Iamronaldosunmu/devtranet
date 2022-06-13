const NavSearch = () => {
    return (
        <div className="border border-[#2D2D2D] rounded-[10px] h-[47px] w-full max-w-[370px] min-w-[200px] flex items-center gap-x-[14px] px-[14px] opacity-30">
            <img src="./assets/searchIcon.svg" className="w-[18px] h-[18px]"/>
            <input type="text" placeholder="I'm Looking for..." className="bg-transparent placeholder:text-[#2D2D2D] focus:outline-none" />
        </div>
    );
}

export default NavSearch;