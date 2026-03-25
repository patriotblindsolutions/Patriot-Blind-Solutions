"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("idle");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const data = {
            firstName: formData.get("first-name") as string,
            lastName: formData.get("last-name") as string,
            company: formData.get("company") as string,
            email: formData.get("email") as string,
            projectName: formData.get("project-name") as string,
            plantLocation: formData.get("plant-location") as string,
            dates: formData.get("dates") as string,
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const json = await res.json();

            if (!res.ok) {
                throw new Error(json.error || "Failed to send the request.");
            }

            setStatus("success");
            // Reset form
            (e.target as HTMLFormElement).reset();
        } catch (error: any) {
            console.error("Error submitting form:", error);
            setStatus("error");
            setErrorMessage(error.message || "Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (status === "success") {
        return (
            <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 sm:p-10 border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <CheckCircle className="h-16 w-16 text-green-500 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Request Received!</h3>
                <p className="text-gray-600 dark:text-gray-300">
                    Thank you for reaching out. Our technical team will review your specs and provide a comprehensive proposal shortly.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-primary font-medium hover:underline focus:outline-none"
                    type="button"
                >
                    Submit another request
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 sm:p-10 border border-gray-200 dark:border-gray-700">
            {status === "error" && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-md text-red-600 dark:text-red-400 text-sm">
                    {errorMessage}
                </div>
            )}
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="first-name">First name</label>
                    <div className="mt-1">
                        <input required autoComplete="given-name" className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md" id="first-name" name="first-name" type="text" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="last-name">Last name</label>
                    <div className="mt-1">
                        <input required autoComplete="family-name" className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md" id="last-name" name="last-name" type="text" />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="company">Company / Contractor</label>
                    <div className="mt-1">
                        <input required autoComplete="organization" className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md" id="company" name="company" type="text" />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">Work Email</label>
                    <div className="mt-1">
                        <input required autoComplete="email" className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md" id="email" name="email" type="email" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="project-name">Project/Site Name</label>
                    <div className="mt-1">
                        <input className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md" id="project-name" name="project-name" placeholder="e.g. 2024 Fall Turnaround" required type="text" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="plant-location">Plant Location</label>
                    <div className="mt-1">
                        <input className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md" id="plant-location" name="plant-location" placeholder="City, State" required type="text" />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="dates">Dates Needed</label>
                    <div className="mt-1">
                        <input className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md" id="dates" name="dates" placeholder="MM/DD/YYYY - MM/DD/YYYY" type="text" />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <button disabled={isSubmitting} className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed" type="submit">
                        {isSubmitting ? "Submitting..." : "Submit Industrial Request"}
                    </button>
                </div>
            </div>
        </form>
    );
}
