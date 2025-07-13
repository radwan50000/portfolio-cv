import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from "gsap/all";
import img from './assets/4.gif';
import arrow from './assets/upload.png';


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const t1 = gsap.timeline();
    const t2 = gsap.timeline();

    useGSAP(() => {
        t1.to('#first-purple-line',{
            width: window.innerWidth < 1500 && window.innerWidth > 760 ?'8%':'16.7%',
            duration: 1,
        });

        t1.fromTo('.list',
            {
                    opacity: 0,
                    translateY: '-200%'
                },
        {
                    opacity: 1,
                    translateY: '0%',
                    stagger: 0.2,
                    ease: 'expo.out',
                })
        t1.to('#second-purple-line',{
            width: window.innerWidth < 1500 && window.innerWidth > 760 ?'20%':'30%',
            duration: 1,
        })

        t2.fromTo
        (
            '#img',
            {
                translateX: '100%',
                opacity: 0,
            },
            {
                duration: 1,
                translateX: '0',
                opacity: 1,
                ease: 'back.out'
            }
        )
        t2.fromTo('.h-text',
            {
                opacity: 0,
                translateY: '100%',
            },
            {
                opacity: 1,
                translateY: '0%',
                duration: 0.8,
                stagger: 0.4,
            })
        t2.fromTo('#ring',
            {
                translateX: '-150%',
                left: 0,
                top: window.innerWidth < 1500 && window.innerWidth > 760 ?'75%':'60%',
            },
            {
                translateX: '0%'
            })

        t1.fromTo('#ring',{
            opacity: 1,
            borderRadius: '100%',
        },{
            rotate: 400,
            opacity: 1,
            ease: 'linear',
            scrollTrigger:{
                trigger:'.end-header',
                start: 'top bottom',
                end: 'top 50%',
                scrub: true,
            }
        })

        t1.fromTo('.header',{
            opacity: 1,
        },{
            opacity: 0,
            ease: 'linear',
            scrollTrigger:{
                trigger:'.end-header',
                start: 'top bottom',
                end: 'top 50%',
                scrub: true,
            }
        })

        gsap.to('.header',{
            position: 'relative',
            scrollTrigger:{
                trigger:'.end-header',
                start: 'top 40%',
                end: 'top 50%',
                scrub: true,
            }
        })


        t1.fromTo('.top-arrow',{
            display: 'none',
            opacity: 0,
        },{
            display: 'block',
            opacity: 1,
            ease: 'linear',
            scrollTrigger:{
                trigger:'.end-header',
                start: 'top bottom',
                end: 'top 50%',
                scrub: true,
            }
        })



        t1.fromTo('#ring',{
            opacity: 1,
        },{
            opacity: 0,
            ease: 'linear',
            scrollTrigger:{
                trigger:'.end-header',
                start: 'top bottom',
                end: 'top 50%',
                scrub: true,
            }
        })

    },[]);

    return (
        <>
            <header className="flex w-full h-[100vh] sticky top-0 pt-4 header justify-between flex-col
                max-2xl:w-[100vw] bg-transparent">
                <div className="w-[90%] mx-auto">
                    <nav className="flex flex-row items-center my-8 gap-8 justify-start w-full max-2xl:gap-2
                            max-2xl:justify-between">
                        <div id='first-purple-line' className='w-0/12 h-1 bg-purple200'></div>
                        <ul
                            className='flex flex-row items-center
                         justify-between w-5/12
                         text-textColor select-none
                         max-lg:gap-8 max-lg:w-7/12 max-2xl:gap-5
                         '
                        >
                            <li className='nav-list list'>Home</li>
                            <li className='nav-list list'><a href={'#text-first-box'}>About</a></li>
                            <li className='nav-list list'><a href={'#portfolio-link'}>Projects</a></li>
                            <li className='nav-list list'><a href={'#start-service'}>Services</a></li>
                            <li className='nav-list list'><a href={'#contact-me-section'}>Contact</a></li>
                        </ul>
                        <div id='second-purple-line' className='w-0/12 h-1 bg-purple200'></div>
                    </nav>

                    <div className='flex w-fit h-fit flex-col items-center'>
                        <div className='mx-auto flex flex-row justify-between items-start mt-15'>
                            <div className='mx-12 leading-[300%] w-8/12'>
                                <h2 className='flex  text-textColor text-[5rem] font-light h-text'>
                                    Hi, I'm
                                </h2>
                                <h1 className='flex text-purple200 text-[6rem] leading-[100%] font-bold my-8 h-text'>
                                    Muhammed Elsayed
                                </h1>
                                <p
                                    className='text-textColor w-9/12 h-text cairo leading-[150%] text-xl
                                    max-lg:text-2xl'>
                                    Passionate about crafting user-friendly and visually engaging websites. I focus on
                                    creating smooth, responsive experiences that align with modern design and
                                    performance standards. Detail-oriented, reliable, and always aiming to deliver
                                    intuitive and accessible interfaces that users enjoy.
                                </p>
                            </div>
                            <img
                                id='img'
                                src={img}
                                alt='animated image for header'
                                className='w-3/12'/>

                        </div>


                    </div>
                </div>
                <div className='flex flex-col gap-4 text-textColor text-md items-center py-16
                    w-fit select-none mx-auto
                    max-2xl:pb-30
                    max-lg:py-64'>
                    <div className="scroll-downs">
                        <div className="mousey">
                            <div className="scroller"></div>
                        </div>
                    </div>
                    <p>Keep Scrolling</p>
                </div>
            </header>
            <div className='w-full h-dvh absolute top-0 left-0 bg z-[-1]'></div>

            <div
                id='ring'
                className='w-60 h-60 rounded-full opacity-0 z-[-1]
                                border-dashed border-3 border-purple200
                                fixed right-0 translate-x-[-50%] top-[60%]
                                '>

            </div>
            <div className='w-full bg  end-header' style={{height: 'calc(100vh / 2)'}}>

            </div>
            <div
                className='top-arrow'
                onClick={() => {
                    window.scrollTo(0, 0);
                }}>
                <img src={arrow} alt={'arrow image'} className={'size-5 invert-100'}/>
            </div>
        </>
    )
}


export default Home;