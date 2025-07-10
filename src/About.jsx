import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    let t1 = gsap.timeline();
    let t2 = gsap.timeline();

    useGSAP( () => {
            t1.fromTo(
                '.about-header'
                ,{
                    translateY: '-140%',
                    opacity: 0,
                },
                {
                    opacity: 1,
                    translateY: '0',
                    scrollTrigger: {
                        trigger: '.start-about-scroll',
                        start: 'top 50%',
                        end: 'top top',
                        scrub: true,
                    }
                }
            )

            t2.fromTo(
                '.purple-line-about',
                {
                    width: '0',
                    opacity: 0,
                },
                {
                    width: '60%',
                    opacity: 1,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: '.start-about-scroll',
                        start: 'top 50%',
                        end: 'top top',
                        scrub: true,
                    }
                }
            )

            t2.fromTo(
                '.about-card',
                {
                    opacity: 0,
                    translateX: '-10%',
                },
                {
                    opacity: 1,
                    translateX: '0',
                    ease: 'power1.out',
                    duration: 2,
                    stagger: 3,
                    scrollTrigger: {
                        trigger: '.start-about-scroll',
                        start: 'top 50%',
                        end: 'top top',
                        scrub: true,
                    }
                }
            )

            t2.fromTo(
                '.gray-text-color',
                {
                    opacity: 0.3,
                },
                {
                    opacity: 1,
                    stagger: 1,
                    ease: 'power1.out',
                    duration: 2,
                    scrollTrigger: {
                        trigger: '#text-first-box',
                        start: 'top bottom',
                        end: 'top top',
                        scrub: true,
                    }
                }
            )

            t1.fromTo(
                '#about-section',
                {
                    scale: 1,
                    opacity: 1,
                },
                {
                    scale: 10,
                    opacity: 0,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: '#end-about-scroll',
                        start: 'top bottom',
                        end: 'top top',
                        scrub: true,
                    }
                }
            )
            t1.fromTo(
                '#about-section',
                {
                    position: 'sticky'
                },
                {
                    position: 'relative',
                    scrollTrigger: {
                        trigger: '#remove-about-sticky',
                        start: 'top bottom',
                        end: 'top 50%',
                        scrub: true,
                    }
                }
            )

        }
    ,[]);

    return (
        <>
            <section id='about-section' className='sticky top-0 pt-8 flex flex-col gap-8 w-[90%] mx-auto'>
                <div
                    className='flex flex-row items-center gap-8'>
                    <h1
                        className='text-purple200 text-8xl about-header font-bold'>
                        ABOUT ME</h1>
                    <div className='rotate-[360deg] w-0 purple-line-about h-1 bg-purple200'></div>
                </div>
                <div className='flex flex-col'>
                    <div
                        className='about-card'>
                            <div className='text-box'>
                                <span className='gray-text-color'>
                                    I'm a passionate Front-End Developer with a strong focus on creating responsive
                                </span>
                                    <span className='gray-text-color'>
                                    , user-friendly web interfaces. I specialize in turning ideas into clean, functional, and visually appealing websites using modern technologies like HTML, CSS, JavaScript, and frameworks like React. I enjoy solving problems, optimizing performance, and crafting smooth user experiences
                                </span>
                                    <span className='gray-text-color'>
                                    .Whether it's building from scratch or improving existing projects, I care about both the code quality and the user journey.
                                </span>
                            </div>
                    </div>
                    <div
                        className='about-card'>
                            <div className='text-box'>
                                <span className='gray-text-color'>
                                    I specialize in building modern, responsive web interfaces that work seamlessly across all devices. Using technologies like HTML, CSS, JavaScript, and React, I turn design concepts into clean, interactive, and accessible user experiences
                                </span>
                                    <span className='gray-text-color'>
                                    . I focus on writing efficient, maintainable code and pay attention to performance, responsiveness, and detail. From implementing smooth animations to optimizing load times, I care about creating websites that not only look good but also perform well.
                                </span>
                                    <span className='gray-text-color'>
                                     I continuously explore new tools and best practices to stay current and improve the quality of my work.
                                </span>
                            </div>
                    </div>
                </div>
            </section>
            <div className='h-dvh start-about-scroll'></div>
            <div
                id='text-first-box'
                className='h-[200vh]'></div>
            <div id='end-about-scroll' className='h-[100vh]'></div>
            <div id='remove-about-sticky' className='h-[100vh]'></div>
        </>
    )
}

export default About;