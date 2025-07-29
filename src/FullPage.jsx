import Home from './Home.jsx';
import Portfolio from "./Portfolio.jsx";
import About from './About.jsx';
import Lenis from 'lenis'
import {ScrollTrigger} from 'gsap/all';
import {gsap} from 'gsap';
import {useEffect, useRef, useState} from 'react';
import Services from "./Services.jsx";
import Skills from './Skills.jsx';
import { useHold } from "@technarts/react-use-hold";

gsap.registerPlugin(ScrollTrigger);

const FullPage = () => {
    const mouseShape = useRef();
    const lenis = new Lenis();
    const [y,setY]= useState(0);
    const [clicked, setClicked] = useState(false)
    const [clicking, setClicking] = useState(false);
    const scrollInterval = useRef(null);

    lenis.on('scroll',ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    })

    gsap.ticker.lagSmoothing(0);

    // document.body.style.zoom = '80%';

    window.addEventListener('mousemove',(e) => {
        mouseShape.current.style.left = (e.clientX - (mouseShape.current.offsetWidth / 2)) + 'px';
        mouseShape.current.style.top = (e.clientY - (mouseShape.current.offsetHeight / 2)) + 'px';
    })


    return (
        <>
            <Home />
            <Portfolio />
            <About />
            <Services />
            <Skills />
            <div
                ref={mouseShape}
                className='w-5 h-5 z-[-1] rounded-full border-1 border-purple200 fixed pointer-none
                    max-xl:hidden'></div>
        </>
    )
}

export default FullPage;