import { Button } from './ui/button'

const Cta = () => {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 md:px-6 lg:px-8 flex flex-col gap-8 items-center">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="xl:text-5xl md:text-3xl text-2xl font-bold text-center">
          Start Your Healing Today
        </h2>
        <p className="xl:text-2xl md:text-xl text-lg text-accent-foreground text-center">
          {`It’s never too early or too late to seek help. Our specialists are here to guide you every step of the way.`}
        </p>
      </div>
      <Button size={'lg'} className="font-bold">
        Schedule
      </Button>
    </div>
  )
}

export default Cta
