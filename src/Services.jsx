import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from "gsap/all";
import check from './assets/check.png';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const t1 = gsap.timeline();
    const t2 = gsap.timeline();
    const t3 = gsap.timeline();

    useGSAP(() => {
        t1.fromTo(
            '#service-header',
            {
                opacity: 0,
                translateY: '50',
            },
            {
                opacity: 1,
                translateY: '0',
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: '#start-service',
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                }
            }
        )

        t2.fromTo(
            '.purple-line-service',
            {
                opacity: 0,
                width: 0,
            },
            {
                opacity: 1,
                width: `calc(100% - (4.5rem * ${'services'.length}))`,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: '#start-service',
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                }
            }
        )

        t3.fromTo(
            '.service-card',
            {
                opacity: 0,
                translateX: '-50',
            },
            {
                opacity: 1,
                translateX: '0',
                ease: 'power1.out',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '#start-service',
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                }
            }
        )


        t1.fromTo(
            '#service-section',
            {
                scale: 1,
                opacity: 1,
            },
            {
                opacity: 0,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: '#end-service',
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                }
            }
        )


    },[])

    return(
        <>
            <section
                id='service-section'
                className='sticky top-0 pt-8 flex flex-col w-[90%] mx-auto min-h-dvh'
                >
                <div className='flex flex-row items-center gap-8'>
                    <h1
                        id='service-header'
                        className='text-8xl text-purple200 font-black
                            max-sm:text-5xl
                            max-lg:text-6xl
                        '>
                        SERVICES
                    </h1>
                    <div className='rotate-[0deg] purple-line-service flex h-1 bg-purple200
                        max-sm:hidden'></div>
                </div>
                <div
                    className='flex flex-row items-center
                        flex-wrap w-8/12 pt-32 mx-auto gap-x-32 gap-y-8
                        max-sm:w-12/12 max-sm:justify-between max-sm:gap-x-0 max-sm:gap-y-8
                        max-sm:pt-16
                        max-lg:w-12/12 max-lg:justify-center
                        '
                    >
                        <div className='service-card'>
                            <img
                                src={check}
                                alt='check image' />
                            <p>Landing Page</p>
                        </div>
                        <div className='service-card'>
                            <img
                                src={check}
                                alt='check image' />
                            <p>Portfolio Pages</p>
                        </div>
                    <div className='service-card'>
                        <img
                            src={check}
                            alt='check image' />
                        <p>E-Commerce websites</p>
                    </div>
                    <div className='service-card'>
                        <img
                            src={check}
                            alt='check image' />
                        <p>CRUD System</p>
                    </div>
                    <div className='service-card'>
                        <img
                            src={check}
                            alt='check image' />
                        <p>News Website</p>
                    </div>
                    <div className='service-card'>
                        <img
                            src={check}
                            alt='check image' />
                        <p>Testimonials and contact forms</p>
                    </div>
                    <div className='service-card'>
                        <img
                            src={check}
                            alt='check image' />
                        <p>Quizzes and forms</p>
                    </div>
                    <div className='service-card'>
                        <img
                            src={check}
                            alt='check image' />
                        <p>User management dashboards</p>
                    </div>
                </div>
            </section>
            <div id='start-service' className='bg h-dvh relative'>
                <div className='w-full h-dvh absolute top-0 left-0 bg z-[-1] translate-y-[-100%]'></div>
            </div>
            <div id='end-service' className='bg h-[50vh]'></div>
        </>
    )
}

export default Services;