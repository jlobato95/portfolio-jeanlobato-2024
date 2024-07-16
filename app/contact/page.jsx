'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'
import emailjs from 'emailjs-com'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Telefone',
    description: '+55 (61) 98318-4452'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'jeancastelobranco@gmail.com'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Endereço',
    description: 'Brasília - DF, Brasil'
  }
]

import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    
    const isEmpty = Object.values(formData).some(value => {
      return typeof value === 'string' ? value.trim() === '' : !value
    })

    if (isEmpty) {
      alert("Preencha todos os campos")
      return
    }

    emailjs
      .send(
        'service_alvl15j', // service ID
        'template_0jr906b', // template ID
        formData,           // templatePrams
        '-VPT3WxauMcsYHRWK' // public key
      )
      .then(
        result => {
          console.log(result.text)
          alert('Mensagem enviada com sucesso!')
        },
        error => {
          console.log(error.text)
          alert('Ocorreu um erro ao enviar a mensagem.')
        }
      )
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* FORM */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Vamos trabalhar juntos</h3>
              <p className="text-white/60">
              Por favor, forneça informações detalhadas sobre seu projeto para que possamos entender melhor suas necessidades. Se você está solicitando desenvolvimento web, design UX/UI, criação de logo ou outros serviços, inclua detalhes como objetivos, público-alvo, preferências de estilo, referências e prazo.
              </p>
              {/* INPUT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Nome"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Sobrenome"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              {/* SELECT */}
              <Select
                name="service"
                value={formData.service}
                onValueChange={value =>
                  setFormData({ ...formData, service: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Escolha o serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Escolha o serviço</SelectLabel>
                    <SelectItem value="Desenvolvimento web">
                      Desenvolvimento web
                    </SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Logo">Logo</SelectItem>
                    <SelectItem value="Outros">Outros</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* TEXTAREA */}
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Digite sua mensagem aqui."
                value={formData.message}
                onChange={handleChange}
              />
              {/* BUTTON */}
              <Button type="submit" size="md" className="max-w-40">
                Enviar mensagem
              </Button>
            </form>
          </div>
          {/* INFO */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
