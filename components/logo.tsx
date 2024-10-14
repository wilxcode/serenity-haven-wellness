import Image from 'next/image'
import Link from 'next/link'

type LogoProps = {
  color: 'default' | 'white'
  link: boolean
}

const Logo = (props: LogoProps) => {
  if (props.link) {
    return (
      <Link
        href={'/'}
        className="flex max-h-12 max-w-48 items-center gap-3 font-bold"
      >
        <Image
          src={props.color === 'default' ? '/logo.svg' : '/logo_white.svg'}
          alt="Logo Serenity Haven Wellness"
          width={45}
          height={45}
        />
        <span className="text-lg leading-5">Serenity Haven Wellness</span>
      </Link>
    )
  }

  return (
    <div className="flex max-h-12 max-w-48 items-center gap-3 font-bold">
      <Image
        src={props.color === 'default' ? '/logo.svg' : '/logo_white.svg'}
        alt="Logo Serenity Haven Wellness"
        width={45}
        height={45}
      />
      <span className="text-lg leading-5">Serenity Haven Wellness</span>
    </div>
  )
}

export default Logo
