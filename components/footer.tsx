import Link from 'next/link'
import Logo from './logo'
import { Button } from './ui/button'
import Image from 'next/image'

const Footer = () => {
  const companyLinks = [
    { href: '/#about', label: 'About Us' },
    { href: '#', label: 'Careers' },
    { href: '#', label: 'FAQs' },
    { href: '#', label: 'Teams' },
    { href: '#', label: 'Contact Us' },
  ]

  const servicesLinks = [
    { href: '/#services', label: 'Our Services' },
    { href: '/#testimonials', label: 'Testimonials' },
    { href: '#', label: 'Blog Post' },
  ]

  const updatesLinks = [
    { href: '/email-alert', label: 'Email Alert' },
    { href: '/new-offer', label: 'New Offer' },
    { href: '/wellness-tips', label: 'Wellness Tips' },
    { href: '/event-update', label: 'Event Update' },
  ]

  return (
    <footer className="text-background bg-primary py-32">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 flex items-start gap-12 *:flex-1">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8 max-w-3xl">
            <Logo color="white" link={false} />
            <p>{`Serenity Haven Wellness is a compassionate and holistic mental health center dedicated to providing personalized care for individuals seeking emotional well-being and inner peace`}</p>
          </div>
          <div className="flex items-center gap-2 *:rounded-full hover:*:bg-foreground">
            <Button variant={'ghost'} size={'icon'}>
              <Image
                src={'/footer_sm_facebook.svg'}
                alt="Facebook"
                width={24}
                height={24}
                className="size-auto"
              />
            </Button>
            <Button variant={'ghost'} size={'icon'}>
              <Image
                src={'/footer_sm_instagram.svg'}
                alt="Twitter"
                width={24}
                height={24}
                className="size-auto"
              />
            </Button>
            <Button variant={'ghost'} size={'icon'}>
              <Image
                src={'/footer_sm_youtube.svg'}
                alt="LinkedIn"
                width={24}
                height={24}
                className="size-auto"
              />
            </Button>
            <Button variant={'ghost'} size={'icon'}>
              <Image
                src={'/footer_sm_linkedin.svg'}
                alt="LinkedIn"
                width={24}
                height={24}
                className="size-auto"
              />
            </Button>
          </div>
          <span className='text-xs'>Copyright © 2024 Serenity Haven Wellness</span>
        </div>
        <div className="flex items-start justify-evenly *:flex *:flex-col *:gap-4">
          <div>
            <h5 className="text-lg font-bold">Company</h5>
            <ul className="list-none flex flex-col gap-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold">Our Services</h5>
            <ul className="list-none flex flex-col gap-2">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold">Stay Updated</h5>
            <ul className="list-none flex flex-col gap-2">
              {updatesLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
