import Home from './Home.jsx';
import Portfolio from "./Portfolio.jsx";
import About from './About.jsx';
import Lenis from 'lenis'
import {ScrollTrigger} from 'gsap/all';
import {gsap} from 'gsap';
import {useRef} from 'react';

gsap.registerPlugin(ScrollTrigger);

const FullPage = () => {
    const mouseShape = useRef();
    const lenis = new Lenis();

    lenis.on('scroll',ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    })

    gsap.ticker.lagSmoothing(0);

    window.addEventListener('mousemove',(e) => {
        mouseShape.current.style.left = (e.clientX - (mouseShape.current.offsetWidth / 2)) + 'px';
        mouseShape.current.style.top = (e.clientY - (mouseShape.current.offsetHeight / 2)) + 'px';
        console.log(e)
    })

    return (
        <>
            <Home />
            <Portfolio />
            <About />
            <div
                ref={mouseShape}
                className='w-5 h-5 z-[-1] rounded-full border-1 border-purple200 fixed pointer-none'></div>
        </>
    )
}

export default FullPage;