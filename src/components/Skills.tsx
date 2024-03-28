import { faSlack } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {motion} from "framer-motion"

const Skills = () => {
  return (
       <motion.div className="w-3/4 mx-auto flex justify-center mt-24 items-center"
       initial= {{opacity: 0, y: 100}}
       whileInView={{opacity: 1, y: 0}}
       transition={{duration: 0.6}}
       viewport={{once: true}}
       >
      <div>
      <div className="flex items-center mb-10">
        <span className="text-sec-color mr-3 text-lg">02.</span> <span className="text-xl sm:text-2xl font-bold mr-5 text-lightest-slate">Skills</span> <hr className="w-28 sm:w-72 border-slate" />
      </div>



      <div className='flex flex-col lg:flex-row lg:space-x-10'>


      <div className="flex flex-col space-y-5 mb-10">
        <p className="text-lightest-slate text-lg font-bold">Frontend</p>
        <hr className="w-1/2 lg:w-full border-slate mb-10"/>
        <ul className={`grid grid-cols-2 text-slate gap-5`}>
          <li><FontAwesomeIcon icon={faSlack} className='fa-xs text-sec-color'/> JavaScript (ES6+)</li>
          <li><FontAwesomeIcon icon={faSlack} className='fa-xs text-sec-color'/> TypeScript</li>
          <li><FontAwesomeIcon icon={faSlack} className='fa-xs text-sec-color'/> React</li>
          <li><FontAwesomeIcon icon={faSlack} className='fa-xs text-sec-color'/> Next.js</li>
          <li><FontAwesomeIcon icon={faSlack} className='fa-xs text-sec-color'/> Bootstrap</li>
          <li><FontAwesomeIcon icon={faSlack} className='fa-xs text-sec-color'/> TailwindCSS</li>
          <li><FontAwesomeIcon icon={faSlack} className='fa-xs text-sec-color'/> SASS</li>
        </ul>
        </div>

        <div className="flex flex-col space-y-5 mb-10">
        <p className="text-lightest-slate text-lg font-bold">Backend</p>
        <hr className="w-1/2 lg:w-full border-slate mb-10"/>
        <ul className={`grid grid-cols-2 text-slate gap-5`}>
          <li><FontAwesomeIcon icon={faSlack} className='fa-xs text-sec-color'/> Node.js</li>
          <li><FontAwesomeIcon icon={faSlack} className='fa-xs text-sec-color'/> Express.js</li>
        </ul>
        </div>

    

        <div className="flex flex-col space-y-5">
        <p className="text-lightest-slate text-lg font-bold">Version Control</p>
        <hr className="w-1/2 lg:w-full border-slate mb-10"/>
        <ul className={`grid grid-cols-2 text-slate gap-5`}>
          <li><FontAwesomeIcon icon={faSlack} className='fa-xs text-sec-color'/> Git</li>
          <li><FontAwesomeIcon icon={faSlack} className='fa-xs text-sec-color'/> GitHub</li>
        </ul>
        </div>

    </div>
    </div>
    </motion.div>
  )
}

export default Skills
