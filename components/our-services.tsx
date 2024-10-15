import Image from 'next/image'
import { Button } from './ui/button'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { FadeText } from './ui/fade-text'

const OurServices = () => {
  return (
    <div
      id="services"
      className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 flex flex-col items-start gap-16"
    >
      <div className="flex flex-col gap-4 max-w-[41.75rem]">
        <div>
          <span className="text-sm font-bold text-primary">What We Offer</span>
          <FadeText
            className="xl:text-5xl md:text-3xl text-2xl font-bold"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.25 } },
            }}
            text="Explore Our Comprehensive Wellness Services"
          />
        </div>
        <div>
          <FadeText
            className="xl:text-2xl md:text-xl text-lg text-accent-foreground"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.35 } },
            }}
            text="We believe mental health is a journey, and every journey deserves
            personalized guidance."
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 *:w-full *:flex-1 *:border-none *:min-h-72 *:flex *:flex-col *:justify-between">
        <Card className="bg-primary/10 hover:rotate-3 rotate-0 transition-transform duration-200 ease-in-out">
          <CardHeader>
            <CardTitle className="xl:text-3xl text-2xl">
              Personalized Mental <br /> Health Plans
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-0 pr-0">
            <div className="flex items-center justify-between">
              <Button
                variant={'outline'}
                className="border-primary text-primary font-bold"
              >
                Read More
              </Button>
              <div>
                <Image
                  src={'/service_illustration_1.svg'}
                  alt="Service Illustration 1"
                  width={176}
                  height={144}
                  className="size-auto"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-primary/55 hover:rotate-3 rotate-0 transition-transform duration-200 ease-in-out">
          <CardHeader>
            <CardTitle className="xl:text-3xl text-2xl">
              Compassionate & <br /> Qualified Professionals
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-0 pr-0">
            <div className="flex items-center justify-between">
              <Button
                variant={'outline'}
                className="border-primary text-primary font-bold"
              >
                Read More
              </Button>
              <div>
                <Image
                  src={'/service_illustration_2.svg'}
                  alt="Service Illustration 2"
                  width={176}
                  height={144}
                  className="size-auto"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-secondary/40 hover:rotate-3 rotate-0 transition-transform duration-200 ease-in-out">
          <CardHeader>
            <CardTitle className="xl:text-3xl text-2xl">
              Holistic Healing <br /> Approach
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-0 pr-0">
            <div className="flex items-center justify-between">
              <Button
                variant={'outline'}
                className="border-primary text-primary font-bold"
              >
                Read More
              </Button>
              <div>
                <Image
                  src={'/service_illustration_3.svg'}
                  alt="Service Illustration 3"
                  width={176}
                  height={144}
                  className="size-auto"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default OurServices
