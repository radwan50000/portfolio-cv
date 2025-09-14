import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/all';
import {useRef} from 'react';
import gsap_icon from './assets/gsap_icon.svg';
import email from './assets/email.svg';
import phone from './assets/phone.svg';

import {
    Bash,
    CSS3,
    Git,
    React,
    GitHubLight,
    HTML5,
    JavaScript,
    Sass,
    TailwindCSS,
    MicrosoftSQLServer, MicrosoftSQLServer2, Bootstrap5, WordPress
} from "developer-icons";


gsap.registerPlugin(ScrollTrigger);


const Skills = () => {
    const t1 = gsap.timeline();
    const t2 = gsap.timeline();
    const t3 = gsap.timeline();
    const purple_line = useRef();
    const about_header = useRef();
    const start_skills = useRef();
    const start_cards = useRef();
    const skill_container = useRef();
    const end_skills = useRef();


    useGSAP( () => {
        t1.fromTo(
            purple_line.current,
            {
                width: '0',
            },
            {
                width: `calc(100% - (4.5rem * ${'about me'.length}))`,
                ease: 'power1',
                scrollTrigger: {
                    trigger: start_skills.current,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                }
            }
        )

        t2.fromTo(
            about_header.current,
            {
                translateY: '-50',
                opacity: 0,
            },
            {
                translateY: '0',
                opacity: 1,
                ease: 'power1',
                scrollTrigger: {
                    trigger: start_skills.current,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                }
            }
        )

        t3.fromTo(
            '.skill-card',
            {
                opacity: 0,
                translateY: '50',
            },
            {
                opacity: 1,
                translateY: '0',
                ease: 'power1',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: start_cards.current,
                    start: 'top bottom',
                    end: '30% top',
                    scrub: true,
                }
            }
        )

        t1.fromTo(
            skill_container.current,
            {
                translateX: '0%',
            },
            {
                delay: 2,
                translateX: (window.innerWidth < 1280 && window.innerWidth)  > 0 ? '-90%':'-80%',
                ease: 'power1',
                scrollTrigger: {
                    trigger: start_cards.current,
                    start: 'top 50%',
                    end: 'bottom 70%',
                    scrub: true,
                }
            }
        )


        t1.fromTo(
            '.skills-section',
            {
                translateY: '0',
                zIndex: 0,
            },
            {
                translateY: '-80%',
                zIndex: '-1',
                ease: 'power1',
                scrollTrigger: {
                    trigger: end_skills.current,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                }
            }
        )




    },[]);

    return (
        <>
            <section
                className='skills-section flex flex-col overflow-x-hidden
                sticky top-0 pt-8 h-dvh mx-auto shrink-0
                    w-[100%]'>
                    <div className='skill-section-container'>
                        <div
                            className='flex items-center gap-8
                                w-[90%] mx-auto'>
                            <h1
                                ref={about_header}
                                className='text-8xl text-purple200 font-bold
                                    max-sm:text-5xl'>
                                SKILLS
                            </h1>
                            <div className='h-1 bg-purple200
                                  max-sm:hidden'
                                 ref={purple_line}
                                 id='purple-line-skills'
                            ></div>
                        </div>
                        <div
                            ref={skill_container}
                            className='flex items-center gap-16 pt-16 w-fit
                            flex-row shrink-0 ml-8
                                max-sm:pt-[15%] max-sm:gap-0
                                max-lg:ml-4'>
                            <div
                                className='skill-card'>
                                <HTML5/>
                                <p>
                                    HTML is used to build the structural foundation of any webpage. It defines and organizes the content that appears in the browser, such as headings, paragraphs, images, videos, and links. Developers use HTML to create forms for user input (like login or contact pages), embed multimedia content, and semantically organize the document for better SEO and accessibility. It serves as the skeleton on which all styles and interactions are built, and it’s essential for creating any visual layout in the browser.
                                </p>
                            </div>
                            <div
                                className='skill-card'>
                                <CSS3 />
                                <p>
                                    CSS is used to style the appearance of HTML elements. It allows developers to control colors, fonts, spacing, layout, and responsiveness. With CSS, you can create flexible designs that adapt to various screen sizes using features like media queries, flexbox, and grid. It is essential for giving websites their look and feel, managing themes like dark and light modes, creating animations and transitions, and improving the overall user experience by visually enhancing every part of a web page.
                                </p>
                            </div>
                            <div
                                className='skill-card'>
                                <JavaScript />
                                <p>
                                    JavaScript is used to bring interactivity and dynamic behavior to websites. It controls how the page responds to user actions like clicks, input, and scrolling. Developers use it to fetch and display data from servers without reloading the page, validate forms before submission, create animations, and build full-fledged applications in the browser. JavaScript also interacts with the DOM (Document Object Model) to modify content in real time, making it a key tool for modern interactive and responsive websites.
                                </p>
                            </div>
                            <div
                                className='skill-card'>
                                <Sass />
                                <p>
                                    SASS is used to write more powerful and maintainable stylesheets by extending regular CSS with additional features like variables, functions, nesting, and mixins. It is especially helpful in large projects where managing repeated values and long style rules becomes difficult. With SASS, developers can organize code better, reuse styles efficiently, and implement complex logic like loops and conditionals directly in their stylesheets. It compiles down to regular CSS, making it fully compatible with all browsers.
                                </p>
                            </div>
                            <div
                                className='skill-card'>
                                <TailwindCSS />
                                <p>
                                    Tailwind CSS is used to build fast and responsive UIs directly in HTML using utility classes. Instead of writing custom CSS, developers apply pre-defined classes like bg-blue-500, p-4, or text-center to style elements. This approach speeds up development, enforces design consistency, and reduces the need for writing traditional CSS. Tailwind is especially useful in modern frontend development where rapid prototyping and clean, component-based design are priorities. It’s also highly customizable and works seamlessly with frameworks like React.
                                </p>
                            </div>
                            <div
                                className='skill-card'>
                                <React />
                                <p>
                                    React is used to build dynamic and component-based user interfaces. Developers use React to create reusable UI components that manage their own state and update efficiently using a virtual DOM. It’s widely used for single-page applications (SPAs), where content changes dynamically without reloading the page. React simplifies complex UI logic and promotes clean, modular code. It supports tools like hooks (useState, useEffect) for managing component behavior, making it ideal for building modern, interactive web applications.
                                </p>
                            </div>
                            <div
                                className='skill-card'>
                                <img src={gsap_icon} alt={'gsap icon'} />
                                <p>
                                    GSAP is used to create advanced animations and motion effects in websites. It provides precise control over how elements move, scale, fade, or rotate, and supports timelines and scroll-based triggers for complex sequences. Developers use GSAP to animate DOM elements, SVGs, and canvas content, making it perfect for interactive landing pages, storytelling websites, or anything requiring rich animation. It integrates smoothly with vanilla JavaScript or frameworks like React and offers smoother performance than CSS animations in many cases.
                                </p>
                            </div>
                            <div
                                className='skill-card'>
                                <MicrosoftSQLServer2 />
                                <p>
                                    SQL is used to manage and interact with data in relational databases. It lets you query, insert, update, and delete records using simple commands like SELECT and INSERT. SQL is essential for working with structured data and supports filtering, sorting, and joining tables. It's widely used in backend development, data analysis, and reporting. Popular databases like MySQL and PostgreSQL use SQL as their core language.
                                </p>
                            </div>
                            <div
                                className='skill-card'>
                                <Bootstrap5 />
                                <p>
                                    Bootstrap is used to design and develop responsive websites with ease. It offers a grid system, prebuilt components, and utilities for layout and styling. It lets you build consistent interfaces using simple classes like container and row. Bootstrap is essential for rapid frontend development and supports customization, theming, and JavaScript plugins. It's widely used in prototyping, UI design, and web projects.
                                </p>
                            </div>
                            <div
                                className='skill-card'>
                                <WordPress />
                                <p>
                                    WordPress is used to create and manage websites through a simple content management system. It lets you publish posts, add pages, and customize designs with themes and plugins. WordPress is essential for building dynamic sites and supports media uploads, SEO tools, and e-commerce features. It's widely used in blogging, business, and online stores. Popular hosts and developers rely on WordPress as their platform.
                                </p>
                            </div>
                            <div
                                className='skill-card'>
                                <Git />
                                <p>
                                    Git is used to manage code changes and track version history in development projects. It allows developers to create branches for experimenting, collaborate with teammates, and safely merge new features or fixes into the main codebase. Git makes it easy to roll back changes if something breaks and keeps a record of who changed what and when. It's essential in both solo and team projects, ensuring smooth collaboration and code integrity over time.
                                </p>
                            </div>
                            <div
                                className='skill-card'>
                                <GitHubLight />
                                <p>
                                    GitHub is used to host Git repositories in the cloud and enable collaboration between developers. It provides tools for version control, code review, issue tracking, and project management. Developers use GitHub to showcase their projects, contribute to open-source software, and work on shared codebases through pull requests. It’s also used for deploying static sites (via GitHub Pages) and integrating with CI/CD pipelines for automated testing and deployment, making it an all-in-one platform for software development.
                                </p>
                            </div>
                            <div
                                className='skill-card'>
                                <Bash />
                                <p>
                                    Bash is used to interact with the operating system via the command line. Developers use Bash to navigate files, automate repetitive tasks, and run scripts that compile code, install packages, or deploy applications. It’s commonly used in software development, especially in Linux environments, DevOps workflows, and backend setups. With Bash, you can write scripts to streamline your workflow, manage servers, and perform complex operations with just a few lines of code.
                                </p>
                            </div>
                        </div>
                    </div>
            </section>
            <div className='bg h-dvh relative' ref={start_skills}>
                <div className='w-full h-dvh absolute top-0 left-0 bg z-[-2] translate-y-[-100%]'></div>
            </div>
            <div className='bg h-[300vh]' ref={start_cards}></div>

            {/*Contact Me Section !!!!!!!!!!!!!!!!!!!!!!*/}

            <section
                    id='contact-me-section'
                    className='bg h-dvh w-[100%] px-[5%] mx-auto flex flex-col pt-[15%] absolute z-50 left-[50%] translate-x-[-50%]
                        max-sm:pt-auto justify-between max-sm:pt-[3%]'
                    ref={end_skills}>
                    <div
                        className='flex w-[80%] justify-between mx-auto
                            max-xl:flex-col max-sm:gap-16 max-sm:w-full
                            max-lg:gap-20'>
                        <div className='text-8xl leading-[90%] w-full mx-auto text-textColor select-none
                            max-sm:text-[5rem] max-sm:font-bold '>
                            Get in <br/>touch <span className='text-[12rem] text-purple200
                                max-sm:text-[8rem] max-sm:font-bold'
                            >.</span>
                        </div>
                        <div className='flex flex-row gap-32 items-start
                            max-sm:flex-wrap max-sm:gap-16'>
                            <div className='flex flex-col gap-8 text-purple200
                                max-sm:text-[0.8rem] max-sm:gap-4'>
                                <p className='text-textColor text-3xl pl-8
                                    max-sm:text-2xl'>
                                    Contact
                                </p>
                                <div className='flex flex-row gap-4 items-center'>
                                    <img src={email} alt={'email'} className='size-5
                                        max-sm:size-4 invert-100'/>
                                    <p>muhammedelsayedradwan5@gmail.com</p>
                                </div>
                                <div className='flex flex-row gap-4 items-center'>
                                    <img src={phone} alt={'email'} className='size-5
                                    max-sm:size-4  invert-100'/>
                                    <p>01125941808</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-8 text-purple200
                            max-sm:text-[0.8rem] max-sm:gap-4'>
                                <p className='text-textColor text-3xl pl-8
                                    max-sm:text-2xl'>
                                    Information
                                </p>
                                <p className='max-xl:pl-8 cursor-pointer'><a href={'#portfolio-link'}>Portfolio</a></p>
                                <p className='max-xl:pl-8 cursor-pointer'><a href={'#start-service'}>Services</a></p>
                                <p className='max-xl:pl-8 cursor-pointer'><a href={'https://github.com/radwan50000'} target={'_blank'}>Github</a></p>
                            </div>
                        </div>
                    </div>
                <div
                    className='social-links-container'>
                    <div className='SL-card-container'>
                        <div className='social-links'>
                            <a href='https://www.facebook.com/share/1MH15xTSbr/' target='_blank'> <p>Facebook</p> </a>
                        </div>
                        <div className='social-links'>
                            <a href='https://www.instagram.com/muhammed5139?igsh=Y3A2NmkzY2dnaWpi' target='_blank'> <p>Instagram</p> </a>
                        </div>
                        <div className='social-links'>
                            <a href='https://www.linkedin.com/in/muhammed-elsayed-321822378/' target='_blank'> <p>LinkedIn</p> </a>
                        </div>
                        <div className='social-links'>
                            <a href='https://x.com/Muhamme75747739' target='_blank'> <p>Twitter ( X )</p> </a>
                        </div>
                    </div>
                    <div className='white-line-bg'></div>
                </div>
            </section>
        </>
    )
}

export default Skills;