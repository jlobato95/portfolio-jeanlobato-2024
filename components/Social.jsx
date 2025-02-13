import Link from 'next/link'

import { FaGithub, FaLinkedin, FaInstagram, FaBehance } from 'react-icons/fa'

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/jlobato95' },
  { icon: <FaLinkedin />, path: 'https://linkedin.com/in/jean-lobato' },
  { icon: <FaBehance />, path: 'https://www.behance.net/jeanlobato1' },
  { icon: <FaInstagram />, path: 'https://www.instagram.com/jeanlobato.dev/' }
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social
