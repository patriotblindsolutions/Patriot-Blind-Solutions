import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Truck, Factory, AlignJustify, CheckCircle } from "lucide-react";
import ContactForm from "../components/ContactForm";

export default function Home() {
    return (
        <>

            <header className="bg-surface-light dark:bg-surface-dark shadow-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 flex items-center">
                            <img alt="Patriot Blind Solutions Logo" className="h-16 w-auto" src="/logo.png" />
                        </div>

                        <div className="hidden md:flex items-center">
                            <a className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-primary hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors" href="tel:8324883168">
                                <Phone className="mr-2 h-4 w-4" />
                                24/7 Support: 832-488-3168
                            </a>
                        </div>
                        <div className="flex items-center gap-2 md:hidden">
                            <a href="tel:8324883168" className="inline-flex items-center justify-center px-3 py-2 rounded-md text-white bg-primary text-sm font-bold">
                                <Phone className="h-4 w-4 mr-1" />
                                <span>Call Now</span>
                            </a>

                        </div>
                    </div>
                </div>

            </header>
            <div className="relative bg-secondary dark:bg-gray-900 overflow-hidden">
                <div className="absolute inset-0">
                    <img alt="Industrial Refinery Background" className="w-full h-full object-cover opacity-10 dark:opacity-15 mix-blend-overlay" src="/flyer.png" />
                    <div aria-hidden="true" className="absolute inset-0 bg-secondary/95 dark:bg-black/95 mix-blend-multiply"></div>
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/70 dark:from-black/95"></div>
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-display uppercase text-left">Positive <span className="text-primary">Isolation</span> Management.<br />Turnaround Solutions Ready.</h1>
                    <p className="mt-6 text-xl text-gray-200 max-w-3xl text-left">The industry's most comprehensive Blinding Management System for refineries and chemical plants. We provide full-scale positive isolation solutions with meticulous tracking and MTR accountability for your critical turnarounds.</p>
                    <div className="mt-12 flex justify-start">
                        <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-red-700 sm:px-8" href="#quote">
                            Request a Quote
                        </a>
                    </div>
                </div>
            </div>



            <section className="py-24 bg-white dark:bg-gray-800" id="management">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base text-primary font-semibold tracking-wide uppercase font-display">Industrial Equipment Rental Solutions</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-display">
                            Seamless Support for Critical Turnarounds
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
                            Our system ensures 100% positive isolation compliance through high-quality equipment rentals and custom industrial rack systems, eliminating lost tool time in high-stakes environments.
                        </p>
                    </div>

                    <div className="mt-20">
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                            <div className="flex flex-col items-center lg:items-start">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white mb-6">
                                    <AlignJustify className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Custom Steel Blind Racks</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-center lg:text-left">
                                    Heavy-duty, organized, labeled, and lockable racks ensuring your isolation equipment is stored safely and accessible. Core differentiator for job site safety and efficiency.
                                </p>
                            </div>

                            <div className="flex flex-col items-center lg:items-start">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white mb-6">
                                    <Factory className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Jobsite Rental Support</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-center lg:text-left">
                                    Providing the hardware you need, when you need it. Our rental solutions are tailored for heavy industrial turnarounds and maintenance cycles.
                                </p>
                            </div>

                            <div className="flex flex-col items-center lg:items-start">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white mb-6">
                                    <Truck className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">24/7 Turnaround Logistics</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-center lg:text-left">
                                    Fast response & flexible logistics for shutdowns. Whether it&apos;s a scheduled delivery or emergency response, our industrial support team is available around the clock.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 bg-gray-50 dark:bg-gray-700/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-12">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Storage & Jobsite Support</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Industrial blind racks available for rent",
                                        "Organized jobsite storage & staging systems",
                                        "Fast response & flexible logistics",
                                        "Experienced refinery support personnel"
                                    ].map((item, i) => (
                                        <li className="flex items-center text-gray-700 dark:text-gray-300" key={i}>
                                            <CheckCircle className="h-5 w-5 text-primary mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white dark:bg-gray-800 flex items-center justify-center p-12 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-gray-700">
                                <img alt="Patriot Blind Solutions Secondary Logo" className="h-48" src="/logo.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-surface-light dark:bg-surface-dark relative" id="quote">
                <div className="absolute top-0 bottom-0 right-0 w-1/2 bg-gray-100 dark:bg-gray-900 hidden lg:block"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="lg:col-span-5 mb-10 lg:mb-0 pt-10">
                            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white font-display">Request Industrial Quote</h2>
                            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                                Provide your turnaround details below. Our technical team will review your specs and provide a comprehensive proposal including MTR availability within 24 hours.
                            </p>
                            <div className="mt-8 space-y-4">
                                <div className="flex items-center">
                                    <Mail className="h-5 w-5 text-primary mr-3" />
                                    <span className="text-gray-700 dark:text-gray-300">chris@patriotblindsolutions.com</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="h-5 w-5 text-primary mr-3" />
                                    <span className="text-gray-700 dark:text-gray-300">832 488 3168</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="h-5 w-5 text-primary mr-3" />
                                    <span className="text-gray-700 dark:text-gray-300">Houston, Texas</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
            <footer aria-labelledby="footer-heading" className="bg-secondary dark:bg-black">
                <h2 className="sr-only" id="footer-heading">Footer</h2>
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <div className="flex flex-col items-center text-center space-y-12">
                        <div className="space-y-8 max-w-2xl">
                            <img alt="Patriot Blind Solutions" className="h-12 w-auto mx-auto" src="/logo.png" />
                            <p className="text-gray-300 text-sm leading-6">The nationwide leader in industrial Blinding Management Systems. Providing critical positive isolation support for large-scale refinery and chemical plant turnarounds.</p>
                            <div className="flex justify-center space-x-6">
                                <a className="text-gray-400 hover:text-white" href="#">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="w-full max-w-2xl">
                            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact</h3>
                            <ul className="mt-4 space-y-4">
                                <li className="text-base text-gray-400">
                                    <span className="block text-white font-medium">Christopher Dunkin</span>
                                    Nationwide Blinding Solutions
                                </li>
                                <li className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-8">
                                    <a className="text-base text-gray-400 hover:text-white flex items-center" href="tel:8324883168">
                                        <Phone className="h-4 w-4 mr-2 text-primary" /> 832 488 3168
                                    </a>
                                    <a className="text-base text-gray-400 hover:text-white flex items-center" href="mailto:chris@patriotblindsolutions.com">
                                        <Mail className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                                        <span className="whitespace-nowrap text-sm sm:text-base">chris@patriotblindsolutions.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-gray-700 pt-8 pb-20 md:pb-0">
                        <p className="text-base text-gray-400 text-center">
                            © 2026 Patriot Blind Solutions. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Mobile sticky emergency call bar */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-primary shadow-2xl">
                <a href="tel:8324883168" className="flex items-center justify-center gap-3 py-4 text-white font-bold text-base w-full">
                    <Phone className="h-6 w-6" />
                    <span>24/7 Emergency Support: 832-488-3168</span>
                </a>
            </div>

        </>
    );
}
