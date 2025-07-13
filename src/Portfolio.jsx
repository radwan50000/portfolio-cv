import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/all';
import movie from './assets/movies.png';
import james from './assets/james.png';
import github from './assets/github.png';
import web from './assets/web.png';
import old_portfolio from './assets/old_portfolio.png';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
    const t1 = gsap.timeline();
    useGSAP(() => {
        t1.fromTo(
            '#portfolio-header',
            {
                opacity: 0,
                translateY: '-340%',
            },
            {
                opacity: 1,
                translateY: '0%',
                duration: 2,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: '.end-portfolio',
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                }
            }
        )
        t1.fromTo(
            '.purple-line',
            {
                width: 0,
            },
            {
                width: '60%',
                duration: 2,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: '.end-portfolio',
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                }
            }
        )
        t1.fromTo(
            '.card',
            {
                opacity: 0,
                translateX: '-10%',
            }
            ,
            {
                opacity: 1,
                translateX: '0',
                duration: 2,
                ease: 'power1.out',
                stagger: 1,
                scrollTrigger: {
                    trigger: '.end-portfolio',
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                }
            }
        )
        t1.fromTo(
            '.portfolio-section',
            {
                opacity: 1,
                translateX: '0',
            },
            {
                opacity: 0,
                translateY: '50%',
                duration: 3,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: '.hide-portfolio',
                    start: 'top bottom',
                    end: 'top 50%',
                    scrub: true,
                }
            }
        )
        t1.fromTo(
            '.portfolio-section',
            {
                position: 'sticky',
            },
            {
                position: 'relative',
                duration: 3,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: '.hide-portfolio',
                    start: 'top 50%',
                    end: 'top 100%',
                    scrub: true,
                }
            }
        )
    },[])

    return (
        <>
            <section className='w-[90%] pt-8 mx-auto sticky top-0 portfolio h-dvh portfolio-section'>
                <div className='flex flex-row items-center gap-16'>
                    <h1
                        id='portfolio-header'
                        className='text-8xl text-purple200 font-black'>
                        PORTFOLIO
                    </h1>
                    <div className='rotate-[360deg] purple-line flex h-1 bg-purple200'></div>
                </div>
                <div
                    className='flex flex-row items-center justify-start m-32 gap-16
                        max-xl:flex-wrap max-xl:mx-0 max-xl:justify-center'>
                    <div className='card'
                         style={{background: `url(${james})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition: 'top'}}>
                        <div className='card-details'>
                            <a href='https://github.com/radwan50000/james-website' target='_blank'><img src={github} alt='github image'/></a>
                            <div className='w-5/12 h-1 bg-purple500'></div>
                            <a href='https://musical-bubblegum-933125.netlify.app/'  target='_blank'><img src={web} alt='github image' /></a>
                        </div>
                    </div>
                    <div className='card'
                        style={{background: `url(${movie})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition: 'top'}}>
                        <div className='card-details'>
                            <a href='https://github.com/radwan50000/Movie_Project' target='_blank'><img src={github} alt='github image' /></a>
                            <div className='w-5/12 h-1 bg-purple500'></div>
                            <a href='https://movies-p.netlify.app/' target='_blank'><img src={web} alt='github image' /></a>
                        </div>
                    </div>
                    <div className='card'
                         style={{background: `url(${old_portfolio})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition: 'top'}}>
                        <div className='card-details'>
                            <a href='https://github.com/radwan50000/portfolio/tree/main' target='_blank'><img src={github} alt='github image' /></a>
                            <div className='w-5/12 h-1 bg-purple500'></div>
                            <a href='https://radwan50000.github.io/' target='_blank'><img src={web} alt='github image' /></a>
                        </div>
                    </div>
                </div>
            </section>
            <div id={'portfolio-link'} className='w-full  end-portfolio' style={{height: 'calc(200vh)'}}></div>
            <div className='w-full  hide-portfolio' style={{height: 'calc(20vh)'}}></div>
        </>
    )
}

export default Portfolio;