import React from 'react';
import {Html} from "@react-three/drei";

const Loader = () => {
    return (
        <Html>
            <div className="absolute top-0 w-full left-0 h-full justify-center items-center">
                <div className="w-[10vw] h-[vw] rounded-full">Loading...</div>
            </div>
        </Html>
    );
};

export default Loader;