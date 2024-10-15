import Image from 'next/image'

const ChoosingUs = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 flex flex-col gap-16">
      <div>
        <span className="text-sm font-bold text-primary">Why Choose Us</span>
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-y-4">
          <div className="xl:max-w-[26.75rem]">
            <h2 className="xl:text-5xl md:text-3xl text-2xl font-bold">
              Your Unique Journey to Healing
            </h2>
          </div>
          <div className="xl:max-w-[37.75rem]">
            <p className="xl:text-2xl md:text-xl text-lg text-accent-foreground">
              {`We embrace a holistic approach to mental health, focusing on your
            journey towards emotional well-being. Our team is here to support
            you every step of the way.`}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-y-8 *:w-full md:*:w-[85%] *:flex *:flex-col *:items-start *:gap-2 *:*:flex *:*:flex-col *:*:items-start *:*:gap-1">
        <div>
          <div>
            <Image
              src="/choosing_us_icon_1.svg"
              alt=""
              width={40}
              height={40}
              className="size-auto"
            />
            <h4 className="xl:text-2xl md:text-xl text-lg font-bold">
              Tailored to You
            </h4>
          </div>
          <p className="text-lg text-accent-foreground">{`We don’t just treat symptoms; we focus on understanding and healing the root causes of mental health challenges.`}</p>
        </div>
        <div>
          <div>
            <Image
              src="/choosing_us_icon_2.svg"
              alt=""
              width={40}
              height={40}
              className="size-auto"
            />
            <h4 className="xl:text-2xl md:text-xl text-lg font-bold">
              Flexible Consultation Options
            </h4>
          </div>
          <p className="text-lg text-accent-foreground">{`Online, in-person, or hybrid. Our flexible consultation options make it easier than ever to get the support you need on your terms.`}</p>
        </div>
        <div>
          <div>
            <Image
              src="/choosing_us_icon_3.svg"
              alt=""
              width={40}
              height={40}
              className="size-auto"
            />
            <h4 className="xl:text-2xl md:text-xl text-lg font-bold">
              Modern, Calming Environment
            </h4>
          </div>
          <p className="text-lg text-accent-foreground">{`Designed with your comfort in mind, our serene atmosphere promotes relaxation and emotional safety from the moment you walk in.`}</p>
        </div>
        <div>
          <div>
            <Image
              src="/choosing_us_icon_4.svg"
              alt=""
              width={40}
              height={40}
              className="size-auto"
            />
            <h4 className="xl:text-2xl md:text-xl text-lg font-bold">
              Confidential & Safe
            </h4>
          </div>
          <p className="text-lg text-accent-foreground">{`Your privacy and safety are our utmost priority. All consultations are held with the highest standard of confidentiality.`}</p>
        </div>
      </div>
    </div>
  )
}

export default ChoosingUs
