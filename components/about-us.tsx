import Image from 'next/image'
import { Button } from './ui/button'

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

const AboutUs = () => {
  return (
    <div
      id="about"
      className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 flex flex-col gap-16"
    >
      <div>
        <span className="text-sm font-bold text-primary">Meet Our Team</span>
        <div className="flex items-center justify-between *:flex-1">
          <h2 className="text-5xl font-bold">
            Compassionate, <br /> Experienced, and <br /> Ready to Support You
          </h2>
          <p className="text-2xl text-accent-foreground">
            {`Our team of licensed therapists and mental health professionals bring a wealth of knowledge and empathy to guide you on your wellness journey.`}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-x-12 gap-y-16">
        {teamMembers.map((member) => {
          return (
            <div
              key={member.name}
              className="flex flex-col items-center justify-between gap-4"
            >
              <div className="flex flex-col items-center gap-4">
                <div className='size-fit'>
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="size-auto"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="text-2xl text-center">{member.name}</h4>
                  <p className="text-lg text-accent-foreground text-center">
                    {member.specialty}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 *:rounded-full *:bg-foreground">
                <Button size={'icon'}>
                  <Image
                    src={'/sm_facebook.svg'}
                    alt="Facebook"
                    width={24}
                    height={24}
                    className="size-auto"
                  />
                </Button>
                <Button size={'icon'}>
                  <Image
                    src={'/sm_x.svg'}
                    alt="Twitter"
                    width={24}
                    height={24}
                    className="size-auto"
                  />
                </Button>
                <Button size={'icon'}>
                  <Image
                    src={'/sm_linkedin.svg'}
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="size-auto"
                  />
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AboutUs
