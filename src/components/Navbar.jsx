import React from 'react';
import {appleImg, bagImg, searchImg} from "../utils/index.js";
import {navLists} from "../constants/index.js";

const Navbar = () => {
    return (
        <header className="w-full py-5 sm:px-10 flex justify-between items-center">
            <nav className="flex w-full screen-max-width">
                <img className="max-sm:mx-3" src={appleImg} alt="Apple" width={14} height={14}/>
                <div className="flex flex-1 justify-center max-sm:hidden">
                    {navLists.map((nav) => {
                        return (<div key={nav}
                                     className="px-5 text-sm cursor-pointer text-gray hover:text-white">
                            {nav}
                        </div>)
                    })}
                </div>
                <div className="flex gap-7 max-sm:justify-end max-sm:flex-1 max-sm:mx-4">
                    <img src={searchImg} alt="Search" width={18} height={18}/>
                    <img src={bagImg} alt="Bag" width={18} height={18}/>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;