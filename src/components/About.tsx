import { forwardRef } from "react"
import Skills from "./Skills"
import pic from "../img/pic.png"
import {motion} from "framer-motion"

const About = () => {
  return (
    <div id="about" className="mt-10">
    <motion.div className="w-4/5 sm:w-3/4 mx-auto"
    initial= {{opacity: 0, y: 100}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.6}}
    viewport={{once: true}}
    >
        <div className="flex items-center mb-10">
            <span className="text-sec-color mr-3 text-lg">01.</span> <span className="text-lg sm:text-xl lg:text-2xl font-bold mr-5 text-lightest-slate">About Me</span> <hr className="w-28 lg:w-72 border-slate" />
        </div>
        <div className="flex flex-col items-center space-y-10 lg:flex lg:flex-row lg:justify-start lg:items-start lg:space-y-0 lg:space-x-52">
            <div className="basis-1/2 text-slate">
            Hello! My name is Pius Ozegbe and I am a passionate <span className="text-sec-color" >full-stack developer</span> with a strong desire to bridge the gap between front-end creativity and back-end functionality. I thrive in environments that allow me to utilize my skills to craft user-friendly and robust applications.
            <br />
            <br />
            My fascination with creating new stuffs and solving problems ignited my journey into the world of coding. Since then, I've honed my skills in both <span className="text-sec-color" >front-end technologies like React and Nextjs and back-end languages like Node js and express.</span>
            <br />
            <br />
            Beyond the code, I possess excellent soft skills like communication, problem-solving and teamwork that enable me to collaborate effectively and translate complex requirements into clear, functional solutions. In my free time, I enjoy Watching and learnig new stuff about the beautiful game, Football. This allows me to bring a fresh perspective and innovative thinking to my development work.
            <br />
            <br />
            I'm currently seeking opportunities to take my tech carreer to the next level<span className="text-sec-color" >.</span>
            </div>
            <div className="basis-1/2 relative">
                <div className={`w-48 border border-sec-color rounded relative imgAbout`}>
                  <img src={pic} alt="" className={`imgAbout hover:saturate-50 `} />
                  <div className={`w-48 border imgDiv rounded-md`}></div>
                </div>
            </div>
        </div>
    </motion.div>
    <Skills />
    </div>
  )
}

export default forwardRef(About)