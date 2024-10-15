import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'

const SeeMore = () => {
  return (
    <div className="bg-accent">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 flex items-start justify-between gap-8 *:flex-1">
        <div className="flex flex-col gap-16 max-w-[43.75rem]">
          <div className="flex flex-col gap-4">
            <h2 className="xl:text-5xl md:text-3xl text-2xl font-bold">
              Find Your Path to Inner Peace
            </h2>
            <p className="xl:text-2xl md:text-xl text-lg text-accent-foreground">{`At Serenity Haven Wellness, we offer a variety of therapeutic services designed to support your journey towards emotional well-being. Our experienced professionals are dedicated to helping you find the right path for your unique needs.`}</p>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4 md:*:w-[85%] *:flex *:flex-col *:items-start *:gap-4">
            <div>
              <div>
                <h4 className="xl:text-2xl md:text-xl text-lg font-bold">
                  Individual Therapy
                </h4>
                <p className="text-lg text-accent-foreground">{`Personalized sessions to address your emotional challenges and promote self-discovery.`}</p>
              </div>
              <Button variant="link" className="font-bold gap-2 pl-0">
                <span>Read More</span>
                <ArrowRight size={16} />
              </Button>
            </div>
            <div>
              <div>
                <h4 className="xl:text-2xl md:text-xl text-lg font-bold">
                  Couples Counseling
                </h4>
                <p className="text-lg text-accent-foreground">{`Strengthen your relationship with effective communication and conflict resolution strategies.`}</p>
              </div>
              <Button variant="link" className="font-bold gap-2 pl-0">
                <span>Read More</span>
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
        <div className="max-w-[26.5rem] h-[29.375rem] bg-primary/70 rounded-3xl hidden lg:flex flex-col justify-end">
          <Image
            src={'/see_more_illustration.svg'}
            alt="See More Illustration"
            width={424}
            height={266}
            className="size-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default SeeMore
