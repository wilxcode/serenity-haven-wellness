import Image from 'next/image'

const Benefits = () => {
  return (
    <div className="bg-accent">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 flex items-start gap-12">
        <div>
          <Image
            src={'/benefits_img.jpg'}
            alt="Benefits Image"
            width={530}
            height={310}
            className="size-auto rounded-3xl"
          />
        </div>
        <div className="flex flex-col gap-8 max-w-2xl">
          <h2 className="text-5xl font-bold">
            Discover the transformative <br /> Benefits of Choosing Serenity{' '}
            <br /> Haven Wellness for Your Care
          </h2>
          <p className="text-2xl text-accent-foreground">
            {`At Serenity Haven Wellness, we prioritize your emotional health with
          personalized, compassionate care. Our diverse range of services
          ensures that you receive the support you need to thrive and achieve
          lasting inner peace.`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Benefits
