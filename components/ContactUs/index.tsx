import React from 'react';
import ContactUsStyle from "./ContactUs.style";
import {Mail} from "react-feather"
import {infoCards} from "../../Config";

function ContactUs() {
    return (
        <ContactUsStyle className={" p-10 lg:p-48 pt-36 lg:pt-48 min-h-screen"}>
            <div className="heading">

                <h2 className={"text-3xl font-semibold"}>Want to get in touch?</h2>
                <p className={"my-2 text-lg max-w-md"}>Get in touch with me and let me know how I can help</p>

            </div>
            <div className="content w-full flex flex-col lg:flex-row mt-6">
                <div className="text w-full">
                    {infoCards.map(({Icon,value,href},index) => {
                        return (
                            <a key={index} href={href} className="info-card flex w-full rounded p-4 mb-4">
                                <div className="icon"><Icon width={25} height={25}/></div>
                                <p className={"ml-5"}>{value}</p>
                            </a>
                        )
                    })}


                </div>
                <div className="form w-full lg:px-5">
                    <div className="contact-card w-full rounded-lg p-5 lg:mx-10">
                        <div className={"mb-5"}>
                            <label htmlFor="name" className="block text-sm font-medium leading-5 ">
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="rounded-md p-2.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-5"
                                    placeholder="Chirag Bhalotia"
                                    aria-describedby="name"
                                />
                            </div>
                        </div>
                        <div className={"mb-5"}>
                            <label htmlFor="email" className="block text-sm font-medium leading-5 ">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="rounded-md p-2.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-5"
                                    placeholder="you@example.com"
                                    aria-describedby="email-description"
                                />
                            </div>
                        </div>
                        <div className={"mb-5"}>
                            <label htmlFor="phoneNo" className="block text-sm font-medium leading-5 ">
                                Phone Number (optional)
                            </label>
                            <div className="mt-2">
                                <input
                                    type="tel"
                                    name="phoneNo"
                                    id="phoneNo"
                                    className="rounded-md p-2.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-5"
                                    placeholder="00000 00000"
                                    aria-describedby="Phone Number"
                                />
                            </div>
                        </div>
                        <div className={"mb-5"}>
                            <label htmlFor="message" className="block text-sm font-medium leading-5 ">
                                Message
                            </label>
                            <div className="mt-2">
                            <textarea
                                name="message"
                                id="message"
                                className="rounded-md p-2.5 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-5"
                                placeholder="Write Your Message"
                                aria-describedby="message"
                            />
                            </div>
                        </div>
                        <button
                            type="button"
                            className="block rounded-md px-6 p-2.5 ml-auto font-semibold text-white shadow-sm"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>

        </ContactUsStyle>
    );
}

export default ContactUs;