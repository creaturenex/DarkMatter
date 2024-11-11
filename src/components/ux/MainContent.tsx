import BreadcrumbNav from "./BreadcrumbNav"
import { CardWithForm } from "../CardWithForm"

export default function MainContent() {
  return (
    <>
      <BreadcrumbNav />
      <h1 className="mb-4 text-3xl font-bold tracking-tight scroll-m-20">Card</h1>

      <div className="box-border p-4 mb-4 bg-white border border-[#d1d9e0] rounded-lg h-96 w-96">Test card #d1d9e0
        <table className="w-full border rounded-md">
          <th className="w-full bg-red-500">
            test
          </th>
          <tr className="bg-slate-100">
            line 1
          </tr>
          <tr className="bg-[#d1d9e0]">
            line 2
          </tr>
        </table>
      </div>
      
      <CardWithForm />
    </>
  )
}
