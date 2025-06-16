/** 
 * @copyright 2025 certifieddev
 * @license Apache-2.0
 */

import { useState } from 'react';

// Dropdown items and about items
const faqItems = [
    {
        question: 'Who am I?',
        answer: `My name is Samuel, a Front-end Developer specializing in the MERN stack and other modern technologies, with a growing portfolio and a strong foundation in web development and design.`
    },
    {
        question: 'What do I do?',
        answer: `I specialize in creating responsive, user-friendly web applications that bring ideas to life. Whether it's a CMS like WordPress/shopify or a custom website/React app, I ensure every project delivers seamless functionality and a great user experience and i help bussinesses get seen and expressed.`
    },
    {
        question: 'what can I do for you?',
        answer: `No fluffs or failed promises; I focus on delivering solutions that take your business to the next milestone. If I can't help, I'll guide you to someone who can. But if you're looking for a digital presence that truly works, trust me when I say, 'Welcome home.' Let's chat!`
    },
    {
        question: 'Why should you hire my services?',
        answer: `Why hire me? Because I don't just offer services — I bring a commitment to making sure what I create works for you. Your success is my priority, and I believe in building a partnership, not just a transaction. Let's become a team and make it happen!`,
    }
];

const aboutItems = [
    {
        label: 'Project done',
        number: 27
    },
    {
        label: 'Years of experience',
        number: 3
    }
];
 

 const About = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

 return (
    <section
        id="about"
        className="section"
    >
        <div className="container">

            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                <p className="text-zinc-400 text-lg mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    Wagwan! 
                    <br />
                    Since you&apos;re still here, I take it then that you know what you want and won&apos;t leave unless you&apos;re sure I can give it you.
                    <br />
                    <br />
                    So a brief intro👇🏾;
                    <br />
                </p>

                {/* FAQ Section */}
                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <div className="border-b border-zinc-600 pb-4">
                            <button
                            onClick={() => toggleAnswer(index)}
                            className="w-full text-left text-zinc-300 font-medium text-lg flex justify-between items-center"
                            >
                                {item.question}
                                <span className="text-zinc-400">
                                    {openIndex === index ? '-' : '+'}
                                </span>
                            </button>
                            {openIndex === index && (
                                <p className="mt-2 text-zinc-400 text-xl md:text-base">
                                    {item.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({ label, number }, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:mb-2">{number}</span>
                                    <span className="text-zinc-400 font-bold md:text-3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }

                    <img 
                        src="/images/logo.svg" 
                        alt="Logo"
                        width={30}
                        height={30}
                        className="ml-auto md:w-[40px] md:h-[40px]" 
                    />
                </div>
            </div>

        </div>
    </section>
);
 };

export default About