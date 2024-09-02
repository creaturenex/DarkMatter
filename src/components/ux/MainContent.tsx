import BreadcrumbNav from "./BreadcrumbNav"
import { CardWithForm } from "../CardWithForm"

export default function MainContent() {
  return (
    <>
      <BreadcrumbNav />
      <h1 className="mb-4 text-3xl font-bold tracking-tight scroll-m-20">Card</h1>
      <CardWithForm />
    </>
  )
}