import Image from 'next/image'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 flex flex-col gap-16">
      <div className="max-w-4xl w-full mx-auto flex flex-col gap-8 items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-6xl font-bold text-center">
            Find Your Path to Emotional Wellness Today
          </h1>
          <h3 className="text-3xl text-accent-foreground text-center">
            We believe in creating a safe, supportive space for individuals
            seeking mental and emotional healing
          </h3>
        </div>
        <Button size={'lg'} className="font-bold">
          Book an Appointment
        </Button>
      </div>
      <div className="flex items-center justify-between gap-4 max-w-3xl w-full mx-auto *:*:rounded-3xl">
        <div>
          <Image
            src={'/hero_img_1.jpg'}
            alt={'Hero image 1'}
            width={176}
            height={178}
            className="size-auto"
          />
        </div>
        <div>
          <Image
            src={'/hero_img_2.jpg'}
            alt={'Hero image 2'}
            width={176}
            height={178}
            className="size-auto"
          />
        </div>
        <div>
          <Image
            src={'/hero_img_3.jpg'}
            alt={'Hero image 3'}
            width={176}
            height={178}
            className="size-auto"
          />
        </div>
        <div>
          <Image
            src={'/hero_img_4.jpg'}
            alt={'Hero image 4'}
            width={176}
            height={178}
            className="size-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
