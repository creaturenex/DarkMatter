import { MoonIcon, SunIcon, GithubIcon } from "lucide-react"

export default function Navbar() {
  return (
    <header class="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div class="container flex h-14 max-w-screen-2xl items-center">
        <div class="mr-4 hidden md:flex">
          <a class="mr-4 flex items-center space-x-2 lg:mr-6" href="/">
            <img src="/Logo.svg" height="48px" width="48px" />
            <span class="hidden font-bold lg:inline-block">Dark Matter</span>
          </a>
          <nav class="flex items-center gap-4 text-sm lg:gap-6">
            <a class="transition-colors hover:text-foreground/80 text-foreground/60" href="/docs">Docs</a>
            <a class="transition-colors hover:text-foreground/80 text-foreground/60" href="/docs/components">Components</a>
            <a class="transition-colors hover:text-foreground/80 text-foreground/60" href="/blocks">Blocks</a>
            <a class="transition-colors hover:text-foreground/80 text-foreground/60" href="/charts">Charts</a>
            <a class="transition-colors hover:text-foreground/80 text-foreground/60" href="/themes">Themes</a>
            <a class="transition-colors hover:text-foreground/80 text-foreground" href="/examples">Examples</a>
            <a class="transition-colors hover:text-foreground/80 text-foreground/60" href="/colors">Colors</a>
          </nav>
        </div>
        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R15u6ja:" data-state="closed">
          <svg stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5">
            <path d="M3 5H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M3 12H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M3 19H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <span class="sr-only">Toggle Menu</span>
        </button>
        <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div class="w-full flex-1 md:w-auto md:flex-none">
            <button class="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64">
              <span class="hidden lg:inline-flex">Search documentation...</span>
              <span class="inline-flex lg:hidden">Search...</span>
              <kbd class="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span class="text-xs">⌘</span>
                K
              </kbd>
            </button>
          </div>
          <nav class="flex items-center">
            <a target="_blank" rel="noreferrer" href="https://github.com/shadcn-ui/ui">
              <div class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8 px-0">
                <GithubIcon />
                <span class="sr-only">GitHub</span>
              </div>
            </a>
 
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8 px-0" type="button" id="radix-:Rtlu6ja:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
              <MoonIcon />
              <SunIcon />
              <span class="sr-only">Toggle theme</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}