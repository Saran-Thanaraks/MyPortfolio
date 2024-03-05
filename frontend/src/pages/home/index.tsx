import "./home.css"
import About from "./about"
import Education from "./education"
import Skills from "./skills"
import Experience from "./experience"
import Projects from "./projects"
import Honors from "./honors"
function Index() {

    return (
        <>
            <section id="about">
                <About />
            </section>
            <section id="education">
                <Education />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="experience">
                <Experience />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="honors">
                <Honors />
            </section>

        </>
    );
}
export default Index;