'use client'

import Link from 'next/link'
import Logo from './logo'
import { Button } from './ui/button'
import { Dispatch, SetStateAction, useState } from 'react'
import { AlignRight, X } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Separator } from './ui/separator'

type NavLinksProps = {
  setIsOpen?: Dispatch<SetStateAction<boolean>>
}

const NavLinks = (props: NavLinksProps) => {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#services', label: 'Our Services' },
    { href: '#', label: 'Appointments' },
  ]

  return (
    <ul className="flex flex-col lg:flex-row list-none lg:items-center items-start gap-8">
      {links.map((link) => (
        <li key={link.href} onClick={() => props.setIsOpen?.(false)}>
          <Link href={link.href} className="underline-offset-4 hover:underline">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="block lg:hidden">
      <Button
        variant={'outline'}
        className="gap-2"
        onClick={() => setIsOpen(true)}
      >
        <span>Menu</span>
        <AlignRight size={16} />
      </Button>
      <div
        data-open={isOpen}
        className="fixed inset-0 bg-foreground/50 backdrop-blur-md z-50 translate-x-[125%] data-[open=true]:translate-x-0 transition-transform duration-200 ease-linear p-4 md:p-6"
      >
        <Card className="rounded-3xl">
          <CardHeader>
            <Button
              variant={'outline'}
              className="gap-2 self-end"
              onClick={() => setIsOpen(false)}
            >
              <span>Close</span>
              <X size={16} />
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <NavLinks setIsOpen={setIsOpen} />
            <Separator />
          </CardContent>
          <CardFooter>
            <Button variant={'secondary'} size={'lg'} className="font-bold">
              Contact Us
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-6 lg:px-8">
      <Logo color="default" link={true} />
      <div className="hidden lg:block">
        <NavLinks />
      </div>
      <Button
        variant={'secondary'}
        size={'lg'}
        className="font-bold hidden lg:block"
      >
        Contact Us
      </Button>
      <MobileMenu />
    </header>
  )
}

export default Header
