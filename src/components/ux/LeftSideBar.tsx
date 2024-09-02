import { ScrollArea } from "../ui/scroll-area";

export default function LeftSideBar() {

  return (
    <ScrollArea className="relative h-full py-6 pr-6 overflow-hidden lg:py-8">
      <div className="w-full">
        <div className="pb-4">
          <h4 className="px-2 py-1 mb-1 text-sm font-semibold rounded-md">Components</h4>
          <div className="grid grid-flow-row text-sm auto-rows-max">
            {["Accordion", "Alert", "Alert Dialog", "Aspect Ratio", "Avatar"].map((ele) => {
              return (
                <a className="flex items-center w-full px-2 py-1 border border-transparent rounded-md group hover:underline text-muted-foreground">
                  {ele}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </ScrollArea >
  )
}

