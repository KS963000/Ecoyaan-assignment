import { Ecoyaan } from "../components/Ecoyaan"
import { Footer } from "../components/Footer"
import { Story } from "../components/Story"
import { Team } from "../components/Team"
import { Values } from "../components/Values"

export const About = () => {
  return (
    <div className="overflow-x-hidden">
        <Ecoyaan/>
        <Values/>
        <Story/>
        <Team/>
        <Footer/>
    </div>
  )
}