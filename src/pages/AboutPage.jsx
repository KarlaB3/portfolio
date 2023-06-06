import education from './../Images/education-img.png'
import experience from './../Images/experience-img.png'

export function AboutPage(props) {
    return (
        <div>
            <h1>About page</h1>
            <img className="education-img" src={education} width="220" height="250" alt="Education"/>
            <img className="experience-img" src={experience} width="250" height="250" alt="Experience"/>
        </div>
    )
}