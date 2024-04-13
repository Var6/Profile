"use client";
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
const AboutSection = () => {
    const [tab,settab]=useState("Skills");
    const [startTransition,ispending]=useTransition();
    const handletabchange=(id)=>{
        startTransition(()=>{
            settab(id);

        });
    }
  return (
    <section className='text-white'>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image src="www.googl" width={500} height={500} />
        <div className="">
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base md:text-lg'> to be written about me </p>
            <div className="flex flex-row mt-8">
                <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500' > Skill     </span>
                <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500' > Education     </span>
                <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500' > Experience     </span>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
