import React from "react";
import Image from "next/image"; // Import Image for Next.js optimization

const cardData = [
  {
    id: 1,
    title: "Feature 1",
    description: "Bring your product ideas to life with MarkAIve's text to UI generator.",
    isHighlighted: true,
  },
  {
    id: 2,
    title: "Feature 2",
    description: "Bring your product ideas to life with MarkAIve's text to UI generator.",
    isHighlighted: false,
  },
  {
    id: 3,
    title: "Feature 3",
    description: "Bring your product ideas to life with MarkAIve's text to UI generator.",
    isHighlighted: false,
  },
  {
    id: 4,
    title: "Feature 4",
    description: "Bring your product ideas to life with MarkAIve's text to UI generator.",
    isHighlighted: false,
  },
];

const MarkAIveCards = () => {
  return (
    <div className="relative w-full py-12 bg-cover bg-center" style={{ backgroundImage: `url('/markaive_cards_section_bg.png')` }}>
      {/* Cards Section */}
      <div className="w-[85%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`p-6 rounded-xl shadow-md border ${
              card.isHighlighted ? "bg-purple-100 border-transparent" : "bg-white"
            }`}
          >
            {/* Card Icon */}
            <div className="w-8 h-8 mb-4">
              {/* Simple icon placeholder, you can replace with actual icons */}
              <div className={`w-full h-full rounded-full ${card.isHighlighted ? "bg-purple-500" : "bg-gray-300"}`}></div>
            </div>
            {/* Card Title */}
            <h3 className={`text-lg font-semibold ${card.isHighlighted ? "text-purple-500" : "text-black"}`}>
              {card.title}
            </h3>
            {/* Card Description */}
            <p className="text-gray-600 mt-2">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Hero Image below cards */}
      <div className="relative w-full flex justify-center mt-8">
        <Image
          src="/markaive_cards_section.png" // Path to the hero image
          alt="MarkAIve Hero Image"
          width={1200}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default MarkAIveCards;
