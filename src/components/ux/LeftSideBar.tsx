import { ScrollArea } from "../ui/scroll-area";



export default function LeftSideBar(){
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  )
  return (
    <ScrollArea className="relative h-full py-6 pr-6 overflow-hidden lg:py-8">
    <div className="p-4">
      <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
      {tags.map((tag) => (
        <>
          <div key={tag} className="text-sm">
            {tag}
          </div>

        </>
      ))}
    </div>
  </ScrollArea>
  )
}