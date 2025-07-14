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

    const event = useHold({
        ms: 300,
        onClick: () => {
            setClicked(true);
        },
        onHold: () => {
            setClicking(true);
            scrollInterval.current = setInterval(() => {
                clicking ? window.scrollBy(0, 10):null;
            }, 16);
        },
        onRelease: () => {
            setClicked(false);
            setClicking(false);
            if (scrollInterval.current) {
                clearInterval(scrollInterval.current);
                scrollInterval.current = null;
            }
        },
    });


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
            <div
                className='flex flex-row items-center gap-4 text-sm text-textColor  fixed bottom-[3%] left-[2%]'
                style={{display: window.innerWidth > 1100 ? 'none':'flex'}}>
                <div
                    className='border-1 border-textColor rounded-full w-15 h-15'
                    {...event}
                >
                </div>
                <p style={{display: clicking ? 'none':'flex'}}>Press To Scroll</p>
            </div>

        </>
    )
}

export default FullPage;