"use client";
import React, { useState } from "react";

const faqData = [
    {
        question: "How can AI benefit my business?",
        answer: "We work with a variety of industries, including [mention industries, e.g., healthcare, finance, retail, manufacturing, etc.], to provide tailored AI solutions.",
    },
    {
        question: "What industries do you serve?",
        answer: "We work with a variety of industries, including [mention industries, e.g., healthcare, finance, retail, manufacturing, etc.], to provide tailored AI solutions.",
    },
    {
        question: "Do you offer custom AI development services?",
        answer: "We work with a variety of industries, including [mention industries, e.g., healthcare, finance, retail, manufacturing, etc.], to provide tailored AI solutions.",
    },
    {
        question: "How do you measure the success of an AI project?",
        answer: "We work with a variety of industries, including [mention industries, e.g., healthcare, finance, retail, manufacturing, etc.], to provide tailored AI solutions.",
    },
    {
        question: "What is the cost structure for your AI solutions?",
        answer: "We work with a variety of industries, including [mention industries, e.g., healthcare, finance, retail, manufacturing, etc.], to provide tailored AI solutions.",
    },





];

const FAQComponent = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-md mx-auto h-[440px] overflow-y-auto p-4  ">
            {faqData.map((item, index) => (
                <div
                    key={index}
                    className="   p-4 bg-transparent  border-b-[0.5px] border-[#ECECEC]"
                >
                    <div
                        className="flex items-center cursor-pointer "
                        onClick={() => handleToggle(index)}
                    >
                        <span
                            className={`mr-3 inline-block w-8 h-8 text-center    ${openIndex === index
                                ? "bg-transparent text-[#CF71ED]"
                                : "bg-transparent text-[#CF71ED]"
                                } flex items-center justify-center`}
                        >
                            {openIndex === index ? "-" : "+"}
                        </span>
                        <span className={`text-[18px] font-medium leading-[28px] ${openIndex === index ? "text-[#31323E]" : "text-[#31323E]"}`}>
                            {item.question}
                        </span>

                    </div>
                    {openIndex === index && (
                        <div className="mt-2 text-[#31323E] text-[14px] font-medium leading-[24px] ml-11 ">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQComponent;
