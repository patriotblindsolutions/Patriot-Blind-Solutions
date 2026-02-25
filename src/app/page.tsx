/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      
<header className="bg-surface-light dark:bg-surface-dark shadow-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex-shrink-0 flex items-center">
<img alt="Patriot Blind Solutions Logo" className="h-16 w-auto" src="/logo.png"/>
</div>
<nav className="hidden md:flex space-x-8">
<a className="text-gray-700 dark:text-gray-300 hover:text-secondary dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#">Blinding Management</a>
<a className="text-gray-700 dark:text-gray-300 hover:text-secondary dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#inventory">Isolation Inventory</a>
<a className="text-gray-700 dark:text-gray-300 hover:text-secondary dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#specs">Technical Specs</a>
<a className="text-gray-700 dark:text-gray-300 hover:text-secondary dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#quote">Contact</a>
</nav>
<div className="hidden md:flex items-center">
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-primary hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors" href="tel:8324883168">
<span className="material-icons mr-2 text-sm">phone</span>
                        24/7 Support: 832-488-3168
                    </a>
</div>
<div className="flex items-center md:hidden">
<button aria-controls="mobile-menu" aria-expanded="false" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary" type="button">
<span className="sr-only">Open main menu</span>
<span className="material-icons">menu</span>
</button>
</div>
</div>
</div>
<div className="hidden md:hidden bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-700" id="mobile-menu">
<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
<a className="text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium" href="#">Blinding Management</a>
<a className="text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium" href="#inventory">Isolation Inventory</a>
<a className="text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium" href="#specs">Technical Specs</a>
<a className="text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium" href="#quote">Contact</a>
<a className="block w-full text-center px-4 py-3 mt-4 rounded-md shadow-sm text-base font-bold text-white bg-primary hover:bg-red-700" href="tel:8324883168">
                    Call 24/7 Support
                </a>
</div>
</div>
</header>
<div className="relative bg-secondary dark:bg-gray-900 overflow-hidden">
<div className="absolute inset-0">
<img alt="Industrial Refinery Background" className="w-full h-full object-cover opacity-20 dark:opacity-30 mix-blend-overlay" src="/logo.png"/>
<div aria-hidden="true" className="absolute inset-0 bg-secondary/80 dark:bg-black/80 mix-blend-multiply"></div>
<div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-transparent dark:from-black/90"></div>
</div>
<div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-display uppercase text-left">Positive <span className="text-primary">Isolation</span> Management.<br/>Turnaround Solutions Ready.</h1>
<p className="mt-6 text-xl text-gray-200 max-w-3xl text-left">The industry's most comprehensive Blinding Management System for refineries and chemical plants. We provide full-scale positive isolation solutions with meticulous tracking and MTR accountability for your critical turnarounds.</p>
<div className="mt-10 max-w-sm sm:max-w-none flex justify-start">
<div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-2 sm:gap-5">
<a className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-red-700 sm:px-8" href="#quote">
                        Request a Quote
                    </a>
<a className="flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-500 text-base font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-white/10 sm:px-8" href="#inventory">
                        View Inventory
                    </a>
</div>
</div>
</div>
</div>
<section className="py-16 bg-surface-light dark:bg-surface-dark">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-base text-primary font-semibold tracking-wide uppercase">Industrial Blinding Management System</h2>
<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-display">Engineered for Critical Turnarounds</p>
<p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">Our system ensures 100% positive isolation compliance through precision inventory tracking and custom industrial rack systems, eliminating lost tool time in high-stakes environments.</p>
</div>
<div className="mt-10">
<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
<div className="relative">
<dt>
<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
<span className="material-icons">storage</span>
</div>
<p className="ml-16 text-lg leading-6 font-bold text-gray-900 dark:text-white">Custom Steel Blind Racks</p>
</dt>
<dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                            Heavy-duty, organized, labeled, and lockable racks ensuring your isolation blinds are stored safely and accessible. Core differentiator for job site safety and efficiency.
                        </dd>
</div>
<div className="relative">
<dt>
<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
<span className="material-icons">qr_code_scanner</span>
</div>
<p className="ml-16 text-lg leading-6 font-bold text-gray-900 dark:text-white">Precision Inventory Tracking</p>
</dt>
<dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                            Eliminate lost blinds and maximize tool time with our meticulous tracking system. Real-time accountability for every piece of isolation hardware on your site.
                        </dd>
</div>
<div className="relative">
<dt>
<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
<span className="material-icons">local_shipping</span>
</div>
<p className="ml-16 text-lg leading-6 font-bold text-gray-900 dark:text-white">24/7 Turnaround Logistics</p>
</dt>
<dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                            Fast response &amp; flexible logistics for shutdowns. Whether it's a scheduled delivery or emergency response, our industrial support team is available around the clock.
                        </dd>
</div>
</dl>
</div>
<div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 lg:flex">
<div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Storage &amp; Jobsite Support</h3>
<ul className="space-y-3">
<li className="flex items-start">
<span className="material-icons text-primary mr-2">check_circle</span>
<span className="text-gray-600 dark:text-gray-300">Industrial blind racks available for rent</span>
</li>
<li className="flex items-start">
<span className="material-icons text-primary mr-2">check_circle</span>
<span className="text-gray-600 dark:text-gray-300">Organized jobsite storage &amp; staging systems</span>
</li>
<li className="flex items-start">
<span className="material-icons text-primary mr-2">check_circle</span>
<span className="text-gray-600 dark:text-gray-300">Fast response &amp; flexible logistics</span>
</li>
<li className="flex items-start">
<span className="material-icons text-primary mr-2">check_circle</span>
<span className="text-gray-600 dark:text-gray-300">Experienced refinery support personnel</span>
</li>
</ul>
</div>
<div className="lg:w-1/2 bg-white dark:bg-gray-900 flex items-center justify-center relative">
<div className="relative w-full h-64 lg:h-full">
<img alt="Heavy Duty Industrial Blind Rack with Steel Paddle Blinds" className="w-full h-full object-cover" src="/logo.png"/>
<div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-50 dark:to-gray-800 lg:w-24"></div>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700" id="inventory">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-12 lg:gap-8">
<div className="lg:col-span-3 mb-8 lg:mb-0">
<nav className="sticky top-24">
<h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 border-b pb-2 dark:border-gray-600">Standard Materials</h3>
<ul className="space-y-2 mb-8">
<li className="flex items-center text-gray-600 dark:text-gray-300">
<span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                                ASTM A516 Grade 70
                            </li>
<li className="flex items-center text-gray-600 dark:text-gray-300">
<span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                                A36 Carbon Steel
                            </li>
<li className="flex items-center text-gray-600 dark:text-gray-300">
<span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                                Stainless 304 &amp; 316
                            </li>
<li className="flex items-center text-gray-600 dark:text-gray-300">
<span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                                Specialty Alloys (Monel, Inconel)
                            </li>
</ul>
<div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 border-l-4 border-l-primary">
<div className="flex items-center mb-2">
<span className="material-icons text-primary mr-2">verified_user</span>
<span className="font-bold text-gray-900 dark:text-white text-sm">Quality Assurance</span>
</div>
<p className="text-xs text-gray-500 dark:text-gray-400"><strong className="text-gray-900 dark:text-white block mb-1 uppercase">Full MTR Documentation</strong> Included with every delivery. Traceability reports available upon request.</p>
</div>
</nav>
</div>
<div className="lg:col-span-9">
<div className="mb-8">
<h2 className="text-3xl font-extrabold text-gray-900 dark:text-white font-display">Technical Inventory</h2>
<p className="mt-2 text-gray-600 dark:text-gray-400">Comprehensive selection of isolation blinds for immediate refinery deployment.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow p-6 flex flex-col">
<div className="h-32 bg-gray-100 dark:bg-gray-700 rounded mb-4 flex items-center justify-center">
<span className="material-icons text-6xl text-gray-400">circle</span>
</div>
<h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Paddle Blinds</h4>
<p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">Standard isolation paddle blinds available in all pressure classes.</p>
<a className="text-primary font-semibold hover:text-red-700 text-sm flex items-center" href="#specs">
                                View Specs <span className="material-icons text-sm ml-1">arrow_forward</span>
</a>
</div>
<div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow p-6 flex flex-col">
<div className="h-32 bg-gray-100 dark:bg-gray-700 rounded mb-4 flex items-center justify-center">
<span className="material-icons text-6xl text-gray-400">visibility</span>
</div>
<h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Spectacle Blinds</h4>
<p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">Figure-8 style blinds for permanent installation or frequent use.</p>
<a className="text-primary font-semibold hover:text-red-700 text-sm flex items-center" href="#specs">
                                View Specs <span className="material-icons text-sm ml-1">arrow_forward</span>
</a>
</div>
<div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow p-6 flex flex-col">
<div className="h-32 bg-gray-100 dark:bg-gray-700 rounded mb-4 flex items-center justify-center">
<span className="material-icons text-6xl text-gray-400">donut_large</span>
</div>
<h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Slip Blinds</h4>
<p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">Versatile slip blinds designed for insertion between flanges.</p>
<a className="text-primary font-semibold hover:text-red-700 text-sm flex items-center" href="#specs">
                                View Specs <span className="material-icons text-sm ml-1">arrow_forward</span>
</a>
</div>
<div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow p-6 flex flex-col">
<div className="h-32 bg-gray-100 dark:bg-gray-700 rounded mb-4 flex items-center justify-center">
<span className="material-icons text-6xl text-gray-400">settings_input_component</span>
</div>
<h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Blind Flanges</h4>
<p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">Heavy-duty blind flanges for end-of-line isolation.</p>
<a className="text-primary font-semibold hover:text-red-700 text-sm flex items-center" href="#specs">
                                View Specs <span className="material-icons text-sm ml-1">arrow_forward</span>
</a>
</div>
<div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow p-6 flex flex-col">
<div className="h-32 bg-gray-100 dark:bg-gray-700 rounded mb-4 flex items-center justify-center">
<span className="material-icons text-6xl text-gray-400">water_drop</span>
</div>
<h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Hydrotest Blinds</h4>
<p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">High-pressure rated blinds specifically for hydrotesting.</p>
<a className="text-primary font-semibold hover:text-red-700 text-sm flex items-center" href="#specs">
                                View Specs <span className="material-icons text-sm ml-1">arrow_forward</span>
</a>
</div>
<div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow p-6 flex flex-col">
<div className="h-32 bg-gray-100 dark:bg-gray-700 rounded mb-4 flex items-center justify-center">
<span className="material-icons text-6xl text-gray-400">handyman</span>
</div>
<h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Custom Fabrication</h4>
<p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">Need specific dimensions? We offer custom fabrication services.</p>
<a className="text-primary font-semibold hover:text-red-700 text-sm flex items-center" href="#quote">
                                Contact Us <span className="material-icons text-sm ml-1">arrow_forward</span>
</a>
</div>
</div>
<div className="mt-16" id="specs">
<h3 className="text-2xl font-extrabold text-gray-900 dark:text-white font-display mb-6">Industrial Engineering Specifications</h3>
<div className="overflow-x-auto shadow-md rounded-lg border border-gray-300 dark:border-gray-700">
<table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
<thead className="bg-secondary">
<tr>
<th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider" scope="col">Blind Type</th>
<th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider" scope="col">Available Sizes (NPS)</th>
<th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider" scope="col">Pressure Class (ANSI)</th>
<th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider" scope="col">Standard Materials</th>
</tr>
</thead>
<tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
<tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
<td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">Paddle Blinds</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">1/2" – 72"</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">150# – 2500#</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300 font-mono text-xs">A516-70, 304/316 SS</td>
</tr>
<tr className="bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
<td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">Spectacle Blinds</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">1/2" – 48"</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">150# – 2500#</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300 font-mono text-xs">A516-70, 304/316 SS</td>
</tr>
<tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
<td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">Slip Blinds / Spacers</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">1/2" – 60"</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">150# – 1500#</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300 font-mono text-xs">Carbon, SS, Alloys</td>
</tr>
<tr className="bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
<td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">Blind Flanges</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">1/2" – 48"</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">150# – 2500#</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300 font-mono text-xs">A105, A350 LF2</td>
</tr>
<tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
<td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">Hydrotest Blinds</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Custom Spec</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">Up to 10,000 PSI</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300 font-mono text-xs">High Yield Carbon</td>
</tr>
</tbody>
</table>
</div>
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
<span className="material-icons text-primary mr-3">email</span>
<span className="text-gray-700 dark:text-gray-300">cdunkin@dfcindustrial.com</span>
</div>
<div className="flex items-center">
<span className="material-icons text-primary mr-3">phone</span>
<span className="text-gray-700 dark:text-gray-300">832 488 3168</span>
</div>
<div className="flex items-center">
<span className="material-icons text-primary mr-3">location_on</span>
<span className="text-gray-700 dark:text-gray-300">Houston, Texas</span>
</div>
</div>
</div>
<div className="lg:col-span-7">
<form action="#" className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 sm:p-10 border border-gray-200 dark:border-gray-700" method="POST">
<div className="mb-8 w-full">
<div className="grid grid-cols-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 relative">
<div className="relative">
<input defaultChecked={true} className="segmented-control-input sr-only peer" id="rental_short" name="rental_type" type="radio" value="short-term"/>
<label className="block w-full text-center py-2.5 px-4 text-sm font-bold rounded-md cursor-pointer transition-all duration-200 ease-in-out" htmlFor="rental_short">
                              Turnaround Rental
                            </label>
</div>
<div className="relative">
<input className="segmented-control-input sr-only peer" id="rental_perm" name="rental_type" type="radio" value="permanent"/>
<label className="block w-full text-center py-2.5 px-4 text-sm font-bold rounded-md cursor-pointer transition-all duration-200 ease-in-out" htmlFor="rental_perm">
                              Permanent Purchase
                            </label>
</div>
</div>
</div>
<div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="first-name">First name</label>
<div className="mt-1">
<input autocomplete="given-name" className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md" id="first-name" name="first-name" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="last-name">Last name</label>
<div className="mt-1">
<input autocomplete="family-name" className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md" id="last-name" name="last-name" type="text"/>
</div>
</div>
<div className="sm:col-span-2">
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="company">Company / Contractor</label>
<div className="mt-1">
<input autocomplete="organization" className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md" id="company" name="company" type="text"/>
</div>
</div>
<div className="sm:col-span-2">
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">Work Email</label>
<div className="mt-1">
<input autocomplete="email" className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md" id="email" name="email" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="project-name">Project/Site Name</label>
<div className="mt-1">
<input className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md" id="project-name" name="project-name" placeholder="e.g. 2024 Fall Turnaround" required={true} type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="plant-location">Plant Location</label>
<div className="mt-1">
<input className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md" id="plant-location" name="plant-location" placeholder="City, State" required={true} type="text"/>
</div>
</div>
<div className="sm:col-span-2">
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="dates">Dates Needed</label>
<div className="mt-1">
<input className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md" id="dates" name="dates" placeholder="MM/DD/YYYY - MM/DD/YYYY" type="text"/>
</div>
</div>
<div className="sm:col-span-2">
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="specs">Upload Specs / Blind List (Optional)</label>
<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
<div className="space-y-1 text-center">
<svg aria-hidden="true" className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48">
<path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="flex text-sm text-gray-600 dark:text-gray-300">
<label className="relative cursor-pointer rounded-md font-medium text-primary hover:text-red-700 focus-within:outline-none" htmlFor="file-upload">
<span>Upload a file</span>
<input className="sr-only" id="file-upload" name="file-upload" type="file"/>
</label>
<p className="pl-1">or drag and drop</p>
</div>
<p className="text-xs text-gray-500 dark:text-gray-400">PDF, Excel, JPG up to 10MB</p>
</div>
</div>
</div>
<div className="sm:col-span-2">
<button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors" type="submit">
                                    Submit Industrial Request
                                </button>
</div>
</div>
</form>
</div>
</div>
</div>
</section>
<footer aria-labelledby="footer-heading" className="bg-secondary dark:bg-black">
<h2 className="sr-only" id="footer-heading">Footer</h2>
<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
<div className="xl:grid xl:grid-cols-3 xl:gap-8">
<div className="space-y-8 xl:col-span-1">
<img alt="Patriot Blind Solutions" className="h-12 w-auto brightness-0 invert" src="/logo.png"/>
<p className="text-gray-300 text-sm leading-6">The nationwide leader in industrial Blinding Management Systems. Providing critical positive isolation support for large-scale refinery and chemical plant turnarounds.</p>
<div className="flex space-x-6">
<a className="text-gray-400 hover:text-white" href="#">
<span className="sr-only">LinkedIn</span>
<svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
<path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path>
</svg>
</a>
</div>
</div>
<div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
<div className="md:grid md:grid-cols-2 md:gap-8">
<div>
<h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Products</h3>
<ul className="mt-4 space-y-4">
<li><a className="text-base text-gray-400 hover:text-white" href="#">Isolation Blinds</a></li>
<li><a className="text-base text-gray-400 hover:text-white" href="#">Spectacle Blinds</a></li>
<li><a className="text-base text-gray-400 hover:text-white" href="#">Slip Blinds</a></li>
<li><a className="text-base text-gray-400 hover:text-white" href="#">Blind Flanges</a></li>
</ul>
</div>
<div className="mt-12 md:mt-0">
<h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Support</h3>
<ul className="mt-4 space-y-4">
<li><a className="text-base text-gray-400 hover:text-white" href="#">Rent vs Purchase</a></li>
<li><a className="text-base text-gray-400 hover:text-white" href="#">Logistics</a></li>
<li><a className="text-base text-gray-400 hover:text-white" href="#">MTR Documentation</a></li>
<li><a className="text-base text-gray-400 hover:text-white" href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="md:grid md:grid-cols-1 md:gap-8">
<div>
<h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact</h3>
<ul className="mt-4 space-y-4">
<li className="text-base text-gray-400">
<span className="block text-white font-medium">Christopher Dunkin</span>
                                    Nationwide Blinding Solutions
                                </li>
<li>
<a className="text-base text-gray-400 hover:text-white flex items-center" href="tel:8324883168">
<span className="material-icons text-sm mr-2 text-primary">phone</span> 832 488 3168
                                    </a>
</li>
<li>
<a className="text-base text-gray-400 hover:text-white flex items-center" href="mailto:cdunkin@dfcindustrial.com">
<span className="material-icons text-sm mr-2 text-primary">email</span> cdunkin@dfcindustrial.com
                                    </a>
</li>
</ul>
</div>
</div>
</div>
</div>
<div className="mt-12 border-t border-gray-700 pt-8">
<p className="text-base text-gray-400 xl:text-center">
                    © 2024 Patriot Blind Solutions. All rights reserved.
                </p>
</div>
</div>
</footer>

    </>
  );
}
