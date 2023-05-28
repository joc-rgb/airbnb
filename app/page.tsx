import ClientOnly from "./components/ClientOnly";

export default function Home() {
  return (
    <ClientOnly>
      <div>Hello Airbnb</div>
    </ClientOnly>
  )
}
