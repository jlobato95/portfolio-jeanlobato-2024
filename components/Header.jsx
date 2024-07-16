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
          <Link href="https://encurtador.com.br/2caPd">
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
