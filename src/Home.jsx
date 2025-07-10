import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from "gsap/all";
import img from './assets/4.gif';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const t1 = gsap.timeline();
    const t2 = gsap.timeline();

    useGSAP(() => {
        t1.to('#first-purple-line',{
            width: '16.7%',
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
            width: '30%',
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
                top: '60%'
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
            <header className="w-full h-dvh sticky top-0 pt-4 header">
                <div className="w-[90%] mx-auto">
                    <nav className="flex flex-row items-center my-8 gap-8 justify-start">
                        <div id='first-purple-line' className='w-0/12 h-1 bg-purple200'></div>
                        <ul
                            className='flex flex-row items-center
                         justify-between w-5/12
                         text-textColor'
                        >
                            <li className='list cursor-pointer transition-[.4s] hover:text-purple200'>Home</li>
                            <li className='list cursor-pointer transition-[.4s] hover:text-purple200'>About</li>
                            <li className='list cursor-pointer transition-[.4s] hover:text-purple200'>Projects</li>
                            <li className='list cursor-pointer transition-[.4s] hover:text-purple200'>Services</li>
                            <li className='list cursor-pointer transition-[.4s] hover:text-purple200'>Contact</li>
                        </ul>
                        <div id='second-purple-line' className='w-0/12 h-1 bg-purple200'></div>
                    </nav>

                    <div className='mx-auto flex flex-row justify-between items-start mt-30'>
                        <div className='mx-12 leading-[300%] w-8/12'>
                            <h2 className='flex  text-textColor text-[5rem] font-light h-text'>
                                Hi, I'm
                            </h2>
                            <h1 className='flex text-purple200 text-[6rem] leading-[100%] font-bold my-8 h-text'>
                                Muhammed Elsayed
                            </h1>
                            <p className='text-textColor w-9/12 h-text cairo leading-[150%]'>
                                Passionate about crafting user-friendly and visually engaging websites. I focus on creating smooth, responsive experiences that align with modern design and performance standards. Detail-oriented, reliable, and always aiming to deliver intuitive and accessible interfaces that users enjoy.
                            </p>
                        </div>
                        <img
                            id='img'
                            src={img}
                            alt='animated image for header'
                            className='w-3/12'/>

                    </div>

                </div>

            </header>
            <div
                id='ring'
                className='w-60 h-60 rounded-full opacity-0 z-90
                                border-dashed border-3 border-purple200
                                fixed left-0 translate-x-[-50%] top-[60%] bg-pageColor'>

            </div>
            <div className='w-full  end-header' style={{height: 'calc(100vh / 2)'}}>

            </div>
        </>
    )
}


export default Home;