import Image from 'next/image'
import { Button } from './ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const teamMembers = [
  {
    name: 'Dr. Michael Evans, MD',
    specialty: 'Board-Certified Psychiatrist',
    img: '/team_dr_michael_evans.jpg',
  },
  {
    name: 'Dr. Amanda Collins, PhD',
    specialty: 'Clinical Psychologist',
    img: '/team_dr_amanda_collins.jpg',
  },
  {
    name: 'Sarah Nguyen, LMFT',
    specialty: 'Licensed Marriage and Family Therapist',
    img: '/team_sarah_nguyen.jpg',
  },
  {
    name: 'Samuel Rivers, LCSW',
    specialty: 'Licensed Clinical Social Worker',
    img: '/team_samuel_rivers.jpg',
  },
  {
    name: 'James Patel, PsyD',
    specialty: 'Clinical Psychologist',
    img: '/team_james_patel.jpg',
  },
  {
    name: 'Emma Clarke, LPC',
    specialty: 'Licensed Professional Counselor',
    img: '/team_emma_clarke.jpg',
  },
  {
    name: 'David Thompson, LMHC',
    specialty: 'Licensed Mental Health Counselor',
    img: '/team_david_thompson.jpg',
  },
  {
    name: 'Rachel Martinez, MSW',
    specialty: 'Mental Health Counselor',
    img: '/team_rachel_martinez.jpg',
  },
]

const socialMedias = [
  { src: '/sm_facebook.svg', alt: 'Facebook' },
  { src: '/sm_x.svg', alt: 'Twitter' },
  { src: '/sm_linkedin.svg', alt: 'LinkedIn' },
]

type SocialMedia = {
  src: string
  alt: string
}

const SocialMediaButton = (props: SocialMedia) => {
  return (
    <Button size={'icon'}>
      <Image
        src={props.src}
        alt={props.alt}
        width={24}
        height={24}
        className="size-auto"
      />
    </Button>
  )
}

type TeamMemberProps = {
  name: string
  specialty: string
  img: string
}

const TeamMember = (props: TeamMemberProps) => {
  return (
    <div
      key={props.name}
      className="flex flex-col items-center justify-between gap-4 aspect-auto"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="size-fit">
          <Image
            src={props.img}
            alt={props.name}
            width={200}
            height={200}
            className="size-auto"
          />
        </div>
        <div className="flex flex-col items-center">
          <h4 className="xl:text-2xl md:text-xl text-lg text-center">
            {props.name}
          </h4>
          <p className="text-lg text-accent-foreground text-center">
            {props.specialty}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 *:rounded-full *:bg-foreground">
        {socialMedias.map((media, index) => (
          <SocialMediaButton key={index} src={media.src} alt={media.alt} />
        ))}
      </div>
    </div>
  )
}

type CarouselProps = {
  teamMembers: Array<{ name: string; specialty: string; img: string }>
}

const TeamCarousel = (props: CarouselProps) => {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full lg:hidden grid grid-cols-[auto_1fr_auto] items-center gap-2"
    >
      <CarouselPrevious className="static" />
      <CarouselContent>
        {props.teamMembers.map((member, index) => (
          <CarouselItem key={index} className="md:basis-1/3 sm:basis-1/2">
            <div className="p-1">
              <TeamMember
                name={member.name}
                specialty={member.specialty}
                img={member.img}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="static" />
    </Carousel>
  )
}

const AboutUs = () => {
  return (
    <div
      id="about"
      className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 flex flex-col gap-16"
    >
      <div>
        <span className="text-sm font-bold text-primary">Meet Our Team</span>
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-4 gap-y-4">
          <div className="xl:max-w-[30.75rem]">
            <h2 className="xl:text-5xl md:text-3xl text-2xl font-bold">
              Compassionate, Experienced, and Ready to Support You
            </h2>
          </div>
          <div className="xl:max-w-[37.75rem]">
            <p className="xl:text-2xl md:text-xl text-lg text-accent-foreground">
              {`Our team of licensed therapists and mental health professionals bring a wealth of knowledge and empathy to guide you on your wellness journey.`}
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-4 grid-rows-2 gap-x-12 gap-y-16">
        {teamMembers.map((member, index) => {
          return (
            <TeamMember
              key={index}
              name={member.name}
              specialty={member.specialty}
              img={member.img}
            />
          )
        })}
      </div>
      <TeamCarousel teamMembers={teamMembers} />
    </div>
  )
}

export default AboutUs
