import Link from 'next/link'
import { Button } from './ui/button'

// COMPONENTS
import Nav from './Nav'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Jean<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* DESKTOP NAV | CALL ME BUTTON */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="https://wa.me/5561983184452?text=Oi%2C%20eu%20vim%20do%20seu%20site.%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20que%20voc%C3%AA%20oferece.%20Pode%20me%20ajudar%3F">
            <Button>Fale comigo</Button>
          </Link>
        </div>

        {/* MOBILE NAV */}

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
