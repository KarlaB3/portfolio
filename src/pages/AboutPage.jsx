import education from './../Images/education-img.png'
import experience from './../Images/experience-img.png'

export function AboutPage(props) {
    return (
        <div className="container-xxl my-4" id="bodyPadding">
            <h1 className="py-2">About Me</h1>
            <img className="img-pages" id="education-img" src={education} width="220" height="250" alt="Education"/>
            <img className="img-pages" id="experience-img" src={experience} width="250" height="250" alt="Experience"/>
        </div>
    )
}