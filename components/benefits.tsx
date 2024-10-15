import Image from 'next/image'
import { FadeText } from './ui/fade-text'

const Benefits = () => {
  return (
    <div className="bg-accent">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 flex items-start justify-between gap-12 *:flex-1">
        <div className="max-w-[33.125rem] max-h-[19.375rem] hidden lg:block">
          <Image
            src={'/benefits_img.jpg'}
            alt="Benefits Image"
            width={530}
            height={310}
            className="size-auto rounded-3xl"
          />
        </div>
        <div className="flex flex-col gap-4 w-full max-w-[39.75rem]">
          <FadeText
            className="xl:text-5xl md:text-3xl text-2xl font-bold"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.25 } },
            }}
            text="Discover the transformative Benefits of Choosing Serenity Haven
            Wellness for Your Care"
          />
          <FadeText
            className="xl:text-2xl md:text-xl text-lg text-accent-foreground"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.35 } },
            }}
            text="At Serenity Haven Wellness, we prioritize your emotional health with
            personalized, compassionate care. Our diverse range of services
            ensures that you receive the support you need to thrive and achieve
            lasting inner peace."
          />
        </div>
      </div>
    </div>
  )
}

export default Benefits
