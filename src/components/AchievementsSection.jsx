"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    id:0,
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {
    id:1,
    prefix: "~",
    metric: "Users",
    value: "1,000",
  },
  {
    id:2,
    metric: "Awards",
    value: "2",
  },
  {
    id:3,
    metric: "Years",
    value: "3",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement,index) => {
          return (
            <div
            key={index} 
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix ? achievement.prefix : ""}
              <div key={`animated-${achievement.id}`} className="animated-wrapper">
                <AnimatedNumbers
                key={`animated-${achievement.id}`}
                  animateToNumber={parseInt(achievement.value.replace(',', ''))}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  includeComma
                  fontStyle={{ fontWeight: "bold", fontSize: "24px" }}
                />
              </div>
              {achievement.postfix ? achievement.postfix : ""}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
