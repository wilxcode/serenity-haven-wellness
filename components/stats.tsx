import NumberTicker from '@/components/ui/number-ticker'

const Stats = () => {
  return (
    <div className="bg-accent">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 flex flex-wrap items-center gap-y-16 justify-between *:flex *:items-center *:gap-3">
        <div>
          <span className="flex gap-3 text-5xl font-bold">
            <NumberTicker value={1000} className="w-[7.625rem]" />
            <span>+</span>
          </span>
          <span className="text-xl">
            Lives <br /> Transformed
          </span>
        </div>
        <div>
          <span className="flex gap-1 text-5xl font-bold">
            <NumberTicker value={95} className="w-14" />
            <span>%</span>
          </span>
          <span className="text-xl">
            Client <br /> Satisfaction
          </span>
        </div>
        <div>
          <span className="flex gap-2 text-5xl font-bold">
            <span>Top</span>
            <NumberTicker value={10} className="w-14" />
          </span>
          <span className="text-xl">
            Mental <br /> Health Center
          </span>
        </div>
      </div>
    </div>
  )
}

export default Stats
