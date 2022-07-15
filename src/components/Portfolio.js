import React, { useEffect } from 'react'
import clero from './img/clero.png'
import atu from './img/atu.png'
import mantiya from './img/mantiya.jpg'
import menu from './img/menu.png'
import travel from './img/trav.png'
import brandyol from './img/brand.png'
import { ExternalLink } from 'react-external-link';

export default function Portfolio() {
    return (
        <div className="wrapper">
            <section id="hero">
                <div className="container hero">
                    <div className="personal-info">
                        <h1>Hello, <span></span></h1>
                        <h1>My Name Is <span></span></h1>
                        <h1>Nargiz <span></span></h1>
                        <a href="/" className="cta">Portfolio</a>
                    </div>
                </div>
            </section>

            <section id="projects">
                <div className="container projects">
                    <div className="project-top">
                        <h1 className="section-title">Recent <span>Projects</span></h1>
                    </div>
                    <div className="project-bottom">
                        <div className="project-item">
                            <div className="project-info">
                                <h1>Project 1</h1>
                                <h2>Brandyol</h2>
                                <h3 className="github">
                                    <ExternalLink href="https://github.com/NargizHasanova/BrandYol">-- github link --
                                    </ExternalLink>
                                </h3>
                                <p>This is my one of my freelance e-commerce trendyol clone project.Used technologies: html,scss,react,redux toolkit</p>
                            </div>
                            <div className="project-img">
                                <ExternalLink href="https://brandyol.surge.sh/">
                                    <img src={brandyol} alt="#" />
                                </ExternalLink>
                            </div>
                        </div>
                        <div className="project-item">
                            <div className="project-info">
                                <h1>Project 2</h1>
                                <h2>PizzaLand</h2>
                                <h3 className="github">
                                    <ExternalLink href="https://github.com/NargizHasanova/react_pizza_project">-- github link --
                                    </ExternalLink>
                                </h3>
                                <p>This is pizza project written on React</p>
                            </div>
                            <div className="project-img">
                                <ExternalLink href="https://pizzaland-project.surge.sh/">
                                    <img src={menu} alt="#" />
                                </ExternalLink>
                            </div>
                        </div>
                        <div className="project-item">
                            <div className="project-info">
                                <h1>Project 3</h1>
                                <h2>Clerc</h2>
                                <h3 className="github">
                                    <ExternalLink href="https://github.com/NargizHasanova/Clerc_Soft_Project">-- github link --
                                    </ExternalLink>
                                </h3>
                                <p>Online furniture store template. Used technologies: html,scss,js</p>
                            </div>
                            <div className="project-img">
                                <ExternalLink href="https://clerc.surge.sh/">
                                    <img src={clero} alt="#" />
                                </ExternalLink>
                            </div>
                        </div>
                        <div className="project-item">
                            <div className="project-info">
                                <h1>Project 4</h1>
                                <h2>Azerbaijan Medical University</h2>
                                <h3 className="github">
                                    <ExternalLink href="https://github.com/NargizHasanova/ATUproject">-- github link --
                                    </ExternalLink>
                                </h3>
                                <p>This is medical university template made by me.HTML,CSS codes used in here</p>
                            </div>
                            <div className="project-img">
                                <ExternalLink href="http://atumed.surge.sh/">
                                    <img src={atu} alt="#" />
                                </ExternalLink>
                            </div>
                        </div>
                        <div className="project-item">
                            <div className="project-info">
                                <h1>Project 5</h1>
                                <h2>Travel Tours</h2>
                                <h3 className="github">
                                    <ExternalLink href="https://github.com/NargizHasanova/travel_page_js">-- github link --
                                    </ExternalLink>
                                </h3>
                                <p>This is simple responsive website template.Used technologies: html,scss,js</p>
                            </div>
                            <div className="project-img">
                                <ExternalLink href="https://trav.surge.sh/">
                                    <img src={travel} alt="#" />
                                </ExternalLink>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="about">
                <div className="container about">
                    <div className="col-left">
                        <div className="about-img">
                            <img src={mantiya} alt="#" />
                        </div>
                    </div>
                    <div className="col-right">
                        <h1 className="section-title">About <span>me</span></h1>
                        <h2>Front-End Web Developer</h2>
                        <p>Nice to meet you!My name is Nargiz. I'm junior frontend web developer from Azerbaijan with 1 year of experience in freelance.Early on in my life I realized I had a deep fascination with technology. As an introvert I tended to want to stay on the computer rather than socializing.I like to learn, build & explore.I'm quietly confident, naturally curious, and perpetually working on improving my skills.</p>
                        <a href="/" className="cta">Download Resume</a>
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="container contact">
                    <div className="adsiz">
                        <h1 className="section-title">Contact <span>Info</span></h1>
                    </div>
                    <div className="contact-items">
                        <div className="contact-item">
                            <div className="icon"><img src="https://img.icons8.com/bubbles/50/000000/broken-phone.png" alt="#" /></div>
                            <div className="contact-info">
                                <h1>Phone</h1>
                                <h2><a href="tel:(+994)050-450-96-62">(+994) 050-450-96-62</a></h2>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon"><img src="https://img.icons8.com/bubbles/50/000000/email.png" alt="#" /></div>
                            <div className="contact-info two">
                                <h1>Email</h1>
                                <h2 className="email"><a href="mailto:nargiz.frontdev3@gmail.com">nargiz.frontdev3@gmail.com</a></h2>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon"><img src="https://img.icons8.com/bubbles/50/000000/map-marker.png" alt="#" /></div>
                            <div className="contact-info">
                                <h1>Address</h1>
                                <h2>Azerbaijan,Baku</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="footer">
                <div className="container footer">
                    <div className="brand"><h1><span>N</span>argiz <span>H</span>asanova</h1></div>
                    <h2>Your Complete Web Solution</h2>
                    <div className="social-icon">
                        <div className="social-item"><a href="/"><img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="#" /></a></div>
                        <div className="social-item"><a href="https://www.facebook.com/nargiz.gasanova.58/" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="#" /></a></div>
                        <div className="social-item"><a href="/"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="#" /></a></div>
                        <div className="social-item"><a href="/"><img src="https://img.icons8.com/color/48/000000/telegram-app--v1.png" alt="#" /></a></div>
                    </div>
                    <p>Copyright © 2022 Nargiz.All rights reserved</p>
                </div>
            </section>

        </div>
    )
}
