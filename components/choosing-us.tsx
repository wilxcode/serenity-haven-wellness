import Image from 'next/image'
import { FadeText } from './ui/fade-text'
import { BoxReveal } from './ui/box-reveal'

const ChoosingUs = () => {
  const features = [
    {
      icon: '/choosing_us_icon_1.svg',
      title: 'Tailored to You',
      description:
        'We don’t just treat symptoms; we focus on understanding and healing the root causes of mental health challenges.',
    },
    {
      icon: '/choosing_us_icon_2.svg',
      title: 'Flexible Consultation Options',
      description:
        'Online, in-person, or hybrid. Our flexible consultation options make it easier than ever to get the support you need on your terms.',
    },
    {
      icon: '/choosing_us_icon_3.svg',
      title: 'Modern, Calming Environment',
      description:
        'Designed with your comfort in mind, our serene atmosphere promotes relaxation and emotional safety from the moment you walk in.',
    },
    {
      icon: '/choosing_us_icon_4.svg',
      title: 'Confidential & Safe',
      description:
        'Your privacy and safety are our utmost priority. All consultations are held with the highest standard of confidentiality.',
    },
  ]

  return (
    <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 flex flex-col gap-16">
      <div>
        <span className="text-sm font-bold text-primary">Why Choose Us</span>
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-y-4 gap-8">
          <div className="xl:max-w-[26.75rem]">
            <FadeText
              className="xl:text-5xl md:text-3xl text-2xl font-bold"
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.25 } },
              }}
              text="Your Unique Journey to Healing"
            />
          </div>
          <div className="xl:max-w-[37.75rem]">
            <FadeText
              className="xl:text-2xl md:text-xl text-lg text-accent-foreground"
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.35 } },
              }}
              text="We embrace a holistic approach to mental health, focusing on your
            journey towards emotional well-being. Our team is here to support
            you every step of the way."
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-8 gap-y-8 *:w-full md:*:w-[85%] *:flex *:flex-col *:items-start *:gap-2 *:*:flex *:*:flex-col *:*:items-start *:*:gap-1">
        {features.map((feature, index) => (
          <BoxReveal key={index} boxColor="hsl(var(--primary))">
            <>
              <div>
                <Image
                  src={feature.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="size-auto"
                />
                <h4 className="xl:text-2xl md:text-xl text-lg font-bold">
                  {feature.title}
                </h4>
              </div>
              <p className="text-lg text-accent-foreground">
                {feature.description}
              </p>
            </>
          </BoxReveal>
        ))}
      </div>
    </div>
  )
}

export default ChoosingUs
