import { Body } from "../components/Body"
import { Footer } from "../components/Footer"
import { Slider } from "../components/Slider"

export const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Slider />
      <Body />
      <Footer />
    </div>
  );
}