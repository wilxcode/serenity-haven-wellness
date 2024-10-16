import Image from 'next/image'
import { Button } from './ui/button'
import BlurFade from './ui/blur-fade'
import { cn } from '@/lib/utils'

const Hero = () => {
  const images = [
    { src: '/hero_img_1.jpg', alt: 'Hero image 1' },
    { src: '/hero_img_2.jpg', alt: 'Hero image 2' },
    { src: '/hero_img_3.jpg', alt: 'Hero image 3' },
    { src: '/hero_img_4.jpg', alt: 'Hero image 4' },
  ]

  return (
    <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 flex flex-col gap-16">
      <div className="max-w-4xl w-full mx-auto flex flex-col gap-8 items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="xl:text-6xl md:text-5xl text-4xl font-bold text-center">
            Find Your Path to Emotional Wellness Today
          </h1>
          <h3 className="xl:text-3xl md:text-2xl text-xl text-accent-foreground text-center">
            We believe in creating a safe, supportive space for individuals
            seeking mental and emotional healing
          </h3>
        </div>
        <Button size={'lg'} className="font-bold">
          Book an Appointment
        </Button>
      </div>
      <div className="flex items-center justify-between sm:gap-8 gap-4 max-w-3xl w-full mx-auto *:*:rounded-2xl">
        {images.map((image, index) => (
          <BlurFade key={image.src} delay={0.25 + index * 0.05} inView>
            <Image
              src={image.src}
              alt={image.alt}
              width={176}
              height={178}
              className={cn("size-auto", index % 2 === 0 ? 'rotate-3' : '-rotate-3')}
              priority={true}
            />
          </BlurFade>
        ))}
      </div>
    </div>
  )
}

export default Hero
