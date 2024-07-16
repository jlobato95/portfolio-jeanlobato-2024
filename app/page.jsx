import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'

//COMPONENTS
import Social from '@/components/Social'
import Photo from '@/components/Photo'
import Stats from '@/components/Stats'
import Link from 'next/link'

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* TEXT */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              Desenvolvedor Front-End | UX/UI Designer
            </span>
            <h1 className="h1">
              Olá, me chamo
              <br />
              <span className="text-accent">Jean Lobato</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Excelência na criação de experiências digitais elegantes e
              interfaces de usuário impactantes, com domínio de várias
              tecnologias e linguagens de programação.
            </p>
            {/* BUTTON AND SOCIALS */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="/assets/resume/cv-jean-lobato.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download Currículo</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* PHOTO */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* <Stats /> */}
    </section>
  )
}

export default Home
