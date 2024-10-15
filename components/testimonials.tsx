import HeroVideoDialog from './ui/hero-video-dialog'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <div className="bg-accent">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 flex flex-col items-start gap-16">
        <div>
          <span className="text-sm font-bold text-primary">Testimonials</span>
          <h2 className="xl:text-5xl md:text-3xl text-2xl font-bold">
            What Our Clients Say
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row items-start justify-between *:flex-1 gap-16">
          <HeroVideoDialog
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="/testimonials_img.jpg"
            thumbnailAlt="Testimonials Video"
            className="max-w-[37.75rem] max-h-[25.25rem]"
          />
          <div className="flex flex-col sm:gap-16 gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <Image
                    key={index}
                    src={'/testimonials_star_icon.svg'}
                    alt="Star Icon"
                    width={24}
                    height={24}
                    className="size-auto"
                  />
                ))}
              </div>
              <p className="xl:text-2xl md:text-xl text-lg text-accent-foreground">{`"Serenity Haven Wellness transformed my life. The support and guidance I received were truly invaluable."`}</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-lg">Sarah Michels</span>
              <span className="text-base">Client</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
