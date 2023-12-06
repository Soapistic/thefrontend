import HommeFemme from "@modules/home/components/hommefemme"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shop all available models only at the Dalzene. Worldwide Shipping. Secure Payment.",
}

const Home = () => {
  return (
      <HommeFemme/>
  )
}

export default Home
