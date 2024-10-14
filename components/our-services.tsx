import Image from 'next/image'
import { Button } from './ui/button'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'

const OurServices = () => {
  return (
    <div
      id="services"
      className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 flex flex-col items-start gap-16"
    >
      <div className="flex flex-col gap-8 max-w-[41.75rem]">
        <div>
          <span className="text-sm font-bold text-primary">What We Offer</span>
          <h2 className="text-5xl font-bold">
            Explore Our Comprehensive Wellness Services
          </h2>
        </div>
        <div>
          <p className="text-2xl text-accent-foreground">
            {`We believe mental health is a journey, and every journey deserves
            personalized guidance.`}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full gap-8 *:flex-1 *:border-none *:min-h-72 *:flex *:flex-col *:justify-between">
        <Card className="bg-primary/10">
          <CardHeader>
            <CardTitle className="text-3xl">
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
        <Card className="bg-primary/55">
          <CardHeader>
            <CardTitle className="text-3xl">
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
        <Card className="bg-secondary/40">
          <CardHeader>
            <CardTitle className="text-3xl">
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
