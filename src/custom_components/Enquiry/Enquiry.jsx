'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";

const Enquiry = () => {
    const [isOpen, setIsOpen] = useState(false);
    const formRef = useRef(null);

    const handleOpenClick = () => {
        setIsOpen(true);
    }

    const handleCloseClick = () => {
        setIsOpen(false);
    }

    const handleClickOutside = (event) => {
        if (formRef.current && !formRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isOpen]);

    useEffect(() => {
        console.log("I got clicked", isOpen);
    }, [isOpen]);

    return (
        <div className={`fixed ${isOpen ? "top-0" : "top-56"} right-0 z-40`} ref={formRef}>
            <button className={`${isOpen ? 'hidden' : ''} -rotate-90 px-2 py-2 bg-offwhite`} onClick={handleOpenClick}>Business Enquiry</button>
            <div className='bg-offwhite'>
                <button className={`ml-3 ${isOpen ? '' : 'hidden'} mt-5`} onClick={handleCloseClick}>close</button>
                {isOpen && <div>
                    <section className="bg-offwhite px-12 h-[100vh] overflow-y-scroll flex flex-col items-center justify-evenly">
                        <div className="flex flex-col lg:items-start">
                            <div className="flex flex-col w-full">
                                <div className="flex flex-col">
                                    <heading className="text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">Name</heading>
                                    <input
                                        placeholder="Enter your name"
                                        className="w-[100%] p-2 rounded-md border border-newgold focus:outline-none"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <heading className="text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">Company Name</heading>
                                    <input
                                        placeholder="Enter your company name"
                                        className="w-[100%] p-2 rounded-md border border-newgold focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="flex flex-col">
                                    <heading className="text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">Email</heading>
                                    <input
                                        placeholder="Enter your email"
                                        className="w-[100%] p-2 rounded-md border border-newgold focus:outline-none"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <heading className="text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">Contact number</heading>
                                    <input
                                        placeholder="Enter your contact no"
                                        type="number"
                                        maxLength="10"
                                        className="w-[100%] p-2 rounded-md border border-newgold focus:outline-none"
                                    />
                                </div>
                            </div>

                            <heading className="text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">Details</heading>
                            <textarea
                                placeholder="Enter your message"
                                className="resize-none p-2 h-28 w-[100%] focus:outline-none border border-newgold rounded-md"
                            />
                            <Button className="my-4 w-[100%]" variant="goldbtn">
                                Send message
                            </Button>
                        </div>
                    </section>
                </div>}
            </div>
        </div>
    );
}

export default Enquiry;
