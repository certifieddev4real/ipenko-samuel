/** 
 * @copyright 2025 certifieddev
 * @license Apache-2.0
 */


/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from "./Button"


const Hero = () => {
    return (
        <section
        id="home"
        className="pt-28 lg:pt-36"
        >
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img 
                            src="/images/avatar-1.jpg"
                            width={40}
                            height={40}
                            alt="Ipenko Samuel portrait"
                            className="img-cover" 
                            />
                        </figure>

                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>

                            Available For Work
                        </div>
                    </div>

                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        We both know why you're here;
                    </h2>

                    <h2 className="flex items-center gap-1.5 text-zinc-400 text-2xl tracking-wide">
                        You want to build something (Most likely a website or a landing page) that actually does what it is suppose to;👉🏾
                        <span className="headline-1">"Make you Money"</span> 
                    </h2>

                    <div className="flex items-center gap-3 m-2">
                        <ButtonPrimary
                            label="Download Resume"
                            icon="download"
                        />

                        <ButtonOutline 
                            href="#about"
                            label="Scroll down"
                            icon="arrow_downward"
                        /> 
                    </div>
                </div>

                <div className="lg:block">
                    <figure className="w-full max-w-[480px] ml-auto border-[3px] rounded-[60px] border-zinc-400/50 overflow-hidden">
                        <img 
                        src="/images/hero-banner-MML.png"
                        width={656}
                        height={800}
                        alt="Ipenko Samuel"
                        className="w-full"
                        />
                    </figure>
                </div>

            </div>

        </section>
    )
}

export default Hero