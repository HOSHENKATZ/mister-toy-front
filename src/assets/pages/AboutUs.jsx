 import { AccordionGroup, AccordionItem } from "../cmps/AccodionGroup.jsx";
import { Map } from "../cmps/Map.jsx";

export function AboutUs() {
    return (
        <section>
            <h2>About Us</h2>
            <p>Hoshen Katz a musician and software developer. 
                over the years Hoshen aquiered many useful studio recording and production skills.
                In the mean time got intrested in the plugin and DSP industry and here we are, after a long journey,
                coding academy course comes to an end.
                Now hes looking for the next step in the audio industry.
            </p>
            <AccordionGroup>
                <AccordionItem title="The Team">
                    <h2>Our team is Here</h2>
                    <p>Hoshen Katz!</p>
                    <p>musician, producer, audio engineer, bass player </p>
                </AccordionItem >
                <AccordionItem title="About Us">
                    <h2>We are Great</h2>
                    <p>Hard working and willing to learn and improve!</p>
                </AccordionItem>
            </AccordionGroup>

            <Map/>
        </section>
    )
}
