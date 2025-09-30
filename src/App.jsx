// import React from 'react';
// import Navbar from './components/Navbar.jsx';
// import Hero from './components/Hero';  // ============  It still works ========
// import Highlights from "./components/Highlights.jsx";
// import Model from "./components/Model.jsx";
// import {ErrorBoundary} from "react-error-boundary";
// import ErrorPage from "./components/ErrorPage.jsx";
//
//
// // "use strict"
// const App = () => {
//     return (
//         <main className="bg-black">
//             <Navbar/>
//             <Hero/>
//             <Highlights/>
//             <ErrorBoundary FallbackComponent={ErrorPage}>
//                 <Model/>
//             </ErrorBoundary>
//         </main>
//     );
// };
// export default App;


import React from 'react'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Highlights from "./components/Highlights.jsx";
import Model from "./components/Model.jsx";
// import {ErrorBoundary} from "react-error-boundary";
// import ErrorPage from "./components/ErrorPage.jsx";
// import * as Sentry from "@sentry/react";
import Features from "./components/Features.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Footer from "./components/Footer.jsx";


// "use strict"
const App = () => {
    // return <button onClick={() => {
    //     throw new Error("This is your first error!");
    // }}>Break the world</button>;
    return (
        <main className="bg-black">
            <Navbar/>
            <Hero/>
            <Highlights/>
            {/*<ErrorBoundary FallbackComponent={ErrorPage}>*/}
            <Model/>
            {/*</ErrorBoundary>*/}
            <Features/>
            <HowItWorks/>
            <Footer/>
        </main>
    );
};

export default App;