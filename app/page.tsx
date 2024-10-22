import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export default function Page() {
  return (
    <div>
      <div className="flex h-screen w-full justify-center items-center box-border">
        <div className="relative z-10 inline-block p-4">
          <div className="absolute -inset-x-8 top-0 h-px bg-slate-900/15 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="absolute -inset-y-8 left-0 w-px bg-slate-900/15 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="absolute -inset-y-8 right-0 w-px bg-slate-900/15 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="absolute bottom-full left-16 -mb-px flex h-8 items-end overflow-hidden">
            <div className="flex -mb-px h-[2px] w-56">
              <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
              <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="text-sm/6 font-semibold text-white/50">
              Products
            </div>
            <Popover>
              <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
                Solutions
              </PopoverButton>
              <PopoverPanel
                transition
                anchor="bottom"
                className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
              >
                <div className="p-3">
                  <a
                    className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                    href="#"
                  >
                    <p className="font-semibold text-white">Insights</p>
                    <p className="text-white/50">
                      Measure actions your users take
                    </p>
                  </a>
                  <a
                    className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                    href="#"
                  >
                    <p className="font-semibold text-white">Automations</p>
                    <p className="text-white/50">
                      Create your own targeted content
                    </p>
                  </a>
                  <a
                    className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                    href="#"
                  >
                    <p className="font-semibold text-white">Reports</p>
                    <p className="text-white/50">Keep track of your growth</p>
                  </a>
                </div>
                <div className="p-3">
                  <a
                    className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                    href="#"
                  >
                    <p className="font-semibold text-white">Documentation</p>
                    <p className="text-white/50">
                      Start integrating products and tools
                    </p>
                  </a>
                </div>
              </PopoverPanel>
            </Popover>
            <div className="text-sm/6 font-semibold text-white/50">Pricing</div>
          </div>
        </div>
      </div>
    </div>
  );
}
