'use client'

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaSass,
  FaWordpress
} from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si'

// ABOUT DATA
const about = {
  title: 'Sobre mim',
  description:
    'Sou um desenvolvedor web apaixonado por criar soluções inovadoras e eficientes. Com sólida experiência em tecnologias modernas, estou sempre em busca de novos desafios para aprimorar minhas habilidades.',
  info: [
    {
      fieldName: 'Nome',
      fieldValue: 'Jean Lobato'
    },
    {
      fieldName: 'Contato',
      fieldValue: '+55 (61) 98318-4452'
    },
    {
      fieldName: 'Experiência',
      fieldValue: '2 Anos'
    },
    {
      fieldName: 'Instagram',
      fieldValue: '@jlobato95'
    },
    {
      fieldName: 'Nacionalidade',
      fieldValue: 'Brasileiro'
    },
    {
      fieldName: 'Email',
      fieldValue: 'jeancastelobranco@gmail.com'
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Disponível'
    },
    {
      fieldName: 'Idiomas',
      fieldValue: 'Português, Inglês (B1 Intermediário)'
    }
  ]
}

// EXPERIENCE DATA
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'Experiência Profissional',
  description:
    'Trabalhei em diversos projetos, aplicando minhas competências em desenvolvimento web, UX/UI design, motion e SEO para entregar resultados excepcionais e superar as expectativas dos clientes.',
  items: [
    {
      company: 'Supremo Tribunal Federal',
      position: 'Estágiario de Desenvolvimento',
      duration: 'Janeiro/2025 - Atualmente'
    },
    {
      company: 'Associação Atados.',
      position: 'Desenvolvedor Front-End',
      duration: 'Janeiro/2024 - Maio/2024'
    },
    {
      company: 'Freelancer',
      position: 'Desenvolvedor Front-End & UI/UX Designer',
      duration: 'Abril/2022 - Atualmente'
    }
  ]
}

// EDUCATION DATA
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'Formação',
  description:
    'Graduando em análise e desenvolvimento de sistemas pela Estácio de Ribeirão Preto. Sempre focado em adquirir conhecimentos atualizados e relevantes para o desenvolvimento web e design.',
  items: [
    {
      institution: 'Estácio de Ribeirão Preto',
      degree: 'Análise e Desenvolvimento de Sistemas',
      duration: '2024-2026'
    },
    {
      institution: 'Imã Tech',
      degree: 'Formação de Desenvolvedor Full Stack',
      duration: '2022'
    }
  ]
}

// SKILLS DATA
const skills = {
  title: 'Hard Skills',
  description:
    'Especializado em HTML, CSS, JavaScript, TypeScript, React, SASS, e GSAP. Competente em UX/UI design, animações e otimização para SEO.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'HTML 5'
    },
    {
      icon: <FaCss3 />,
      name: 'CSS 3'
    },
    {
      icon: <FaJs />,
      name: 'JavaScript'
    },
    {
      icon: <FaReact />,
      name: 'React.JS'
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.JS'
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.JS'
    },
    {
      icon: <SiTypescript />,
      name: 'Typescript'
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS'
    },
    {
      icon: <FaSass />,
      name: 'Sass'
    },
    {
      icon: <FaFigma />,
      name: 'Figma'
    },
    {
      icon: <FaWordpress />,
      name: 'Wordpress'
    }
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Formação</TabsTrigger>
            <TabsTrigger value="skills">Hard Skills</TabsTrigger>
            <TabsTrigger value="about">Sobre mim</TabsTrigger>
          </TabsList>

          {/* CONTENT */}
          <div className="min-h-[70vh] w-full">
            {/* EXPERIENCE */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className=" flex items-center gap-3">
                            {/* DOT */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* EDUCATION */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[80px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className=" flex items-center gap-3">
                            {/* DOT */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* SKILSS */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* ABOUT ME */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
