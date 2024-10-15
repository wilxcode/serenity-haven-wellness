import NumberTicker from '@/components/ui/number-ticker'

const Stats = () => {
  return (
    <div className="bg-accent">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 flex flex-col sm:flex-row md:flex-wrap items-center gap-y-16 justify-between *:flex *:flex-col xl:*:flex-row *:items-center *:gap-1 md:*:gap-2">
        <div>
          <span className="xl:text-5xl md:text-4xl text-2xl font-bold">
            <div className="hidden xl:flex items-center gap-3">
              <NumberTicker
                value={1000}
                className="w-[7.625rem] text-foreground"
              />
              <span>+</span>
            </div>
            <span className="xl:hidden">1000+</span>
          </span>
          <span className="xl:text-xl md:text-lg text-center xl:text-left">
            Lives <br /> Transformed
          </span>
        </div>
        <div>
          <span className="xl:text-5xl md:text-4xl text-2xl font-bold">
            <div className="hidden xl:flex items-center gap-1">
              <NumberTicker value={95} className="w-14 text-foreground" />
              <span>%</span>
            </div>
            <span className="xl:hidden">95%</span>
          </span>
          <span className="xl:text-xl md:text-lg text-center xl:text-left">
            Client <br /> Satisfaction
          </span>
        </div>
        <div>
          <span className="flex gap-1 xl:text-5xl md:text-4xl text-2xl font-bold">
            <span>Top</span>
            <div className="hidden xl:block">
              <NumberTicker value={10} className="w-14 text-foreground" />
            </div>
            <span className="xl:hidden">10</span>
          </span>
          <span className="xl:text-xl md:text-lg text-center xl:text-left">
            Mental <br /> Health Center
          </span>
        </div>
      </div>
    </div>
  )
}

export default Stats
