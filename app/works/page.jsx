'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

import Link from 'next/link'
import Image from 'next/image'
import { handleClientScriptLoad } from 'next/script'
import WorkSliderButtons from '@/components/WorkSliderButtons'

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus laudantium dolorum expedita.',
    stack: [{ name: 'HTML 5' }, { name: 'CSS 3' }, { name: 'JavaScript' }],
    image: '/assets/work/thumb1.png',
    live: '',
    github: ''
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'project 2',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus laudantium dolorum expedita.',
    stack: [{ name: 'React.JS' }, { name: 'Sass' }, { name: 'Node.JS' }],
    image: '/assets/work/thumb2.png',
    live: '',
    github: ''
  },
  {
    num: '03',
    category: 'frontend',
    title: 'project 1',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus laudantium dolorum expedita.',
    stack: [{ name: 'Next.JS' }, { name: 'Tailwind.CSS' }],
    image: '/assets/work/thumb3.png',
    live: '',
    github: ''
  }
]

const Works = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = swiper => {
    // GET CURRENT SLIDE INDEX
    const currentIndex = swiper.activeIndex
    // UPDATE PROJECT STATE BASED ON CURRENT SLIDE INDEX
    setProject(projects[currentIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* OUTLINE NUM */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* PROJECT CATEGORY */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* PROJECT DESCRIPTION */}
              <p className="text-white/60">{project.description}</p>
              {/* STACKS */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* REMOVE THE LAST COMMA */}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  )
                })}
              </ul>
              {/* BORDER */}
              <div className="border border-white/20"></div>
              {/* BUTTONS */}
              <div className="flex items-center gap-4">
                {/* LIVE PROJECT BUTTON */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Acessar Projeto</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* GITHUB PROJECT BUTTON */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Acessar Repositório</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* OVERLAY */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* IMAGE */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/* SLIDER BUTTONS */}
              <WorkSliderButtons
                containerStyles=" flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex jutify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Works
