import './index.scss'
import AnimatedLetters from '../AnimatedLetters'


const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        stringArray={['A','b','o','u','t',' ','M','e']}
                        idx={15}
                        />
                </h1>
                <p>I am an engineering in the midst of a career change. I was orignally an Electrical Engineering Technology graduate and I worked for three years. I worked for The Metropolitan Transportation Authority in New York City for most of those three years. I decided to have a change in career and went back to school to study computer science and I will be graduating in December of 2023. I have experience as a software engineering intern at John Deere in the summer of 2022 and I am currently working as a Data and Analytics Intern at PepsiCo.</p>
                
            </div>
        </div>
    )
}

export default About