import Link from 'next/link'
import Logo from './logo'
import { Button } from './ui/button'
import Image from 'next/image'

const SocialMediaButtons = () => {
  const socialMediaLinks = [
    { src: '/footer_sm_facebook.svg', alt: 'Facebook' },
    { src: '/footer_sm_instagram.svg', alt: 'Instagram' },
    { src: '/footer_sm_youtube.svg', alt: 'YouTube' },
    { src: '/footer_sm_linkedin.svg', alt: 'LinkedIn' },
  ]

  return (
    <div className="flex items-center gap-2 *:rounded-full hover:*:bg-foreground">
      {socialMediaLinks.map((link, index) => (
        <Button key={index} variant={'ghost'} size={'icon'}>
          <Image
            src={link.src}
            alt={link.alt}
            width={24}
            height={24}
            className="size-auto"
          />
        </Button>
      ))}
    </div>
  )
}

type LinkListProps = {
  links: { href: string; label: string }[]
  title: string
}

const LinkList = (props: LinkListProps) => (
  <div>
    <h5 className="text-lg font-bold">{props.title}</h5>
    <nav>
      <ul className="list-none flex flex-col gap-2">
        {props.links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="underline-offset-4 hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
)

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
    <footer className="text-background bg-primary xl:py-32 md:py-24 py-16">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row items-start gap-12 *:flex-1">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8 max-w-3xl">
            <Logo color="white" link={false} />
            <p>{`Serenity Haven Wellness is a compassionate and holistic mental health center dedicated to providing personalized care for individuals seeking emotional well-being and inner peace`}</p>
          </div>
          <SocialMediaButtons />
          <span className="text-xs">
            Copyright © 2024 Serenity Haven Wellness
          </span>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:justify-evenly gap-y-16 *:flex *:flex-col *:gap-4 w-full">
          <LinkList links={companyLinks} title="Company" />
          <LinkList links={servicesLinks} title="Our Services" />
          <LinkList links={updatesLinks} title="Stay Updated" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
