import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {faLink} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Project1 from "../img/Project1.png"
import buy from "../img/buy.jpeg"
import chat from "../img/chat.jpeg"
import {motion} from "framer-motion"

const Projects = () => {

  return (
    <div id='projects' className="mt-40">
      <motion.div className="flex items-center justify-center mb-10"
      initial= {{opacity: 0, y: 100}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      viewport={{once: true}}
      >
      <span className="text-sec-color text-lg mr-3">03.</span> <span className="text-lightest-slate text-xl sm:text-2xl font-bold mr-5">Projects</span>
      <hr className="w-28 sm:w-72 mt-1 border-slate" />
      </motion.div>

      <a href="https://blog-post-mu-nine.vercel.app/" target='blank'><motion.div className='w-4/5 sm:w-2/4 shadow-gray-600 hover:shadow-lg hover:shadow-gray-600 shadow project-container rounded transition flex flex-col items-center  mx-auto overflow-hidden relative p-4 sm:p-8 mb-4'
      initial= {{opacity: 0, x: 200}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 0.5}}
      viewport={{once: true}}
      >
      <p className='text-2xl border-b-2 text-lightest-slate border-sec-color mb-4'>BlogPost</p>
      <figure>
      <img src={Project1} alt="" className="mb-3" />
      <figcaption className="text-xs text-center text-slate"><span className='mr-4'>REACT</span> <span>REDUX TOOLKIT</span></figcaption>
      </figure>
      <p className='mt-4 text-center text-lightest-slate'>This is BlogPost, a cutting-edge blogging platform crafted with React and powered by Redux Toolkit.</p>
      <div className='mt-4 flex space-x-4'>
      <a href="https://github.com/PiusOzegbe/BlogPost" target='blank'><FontAwesomeIcon icon={faGithub} className='fa-lg text-slate hover:text-sec-color transition' /></a>
      <FontAwesomeIcon icon={faLink} className='fa-lg text-slate hover:text-sec-color transition' />
      </div>
    </motion.div></a>


    <motion.div className='w-4/5 mt-16 sm:w-2/4 shadow-gray-600 hover:shadow-lg hover:shadow-gray-600 shadow project-container rounded transition flex flex-col items-center  mx-auto overflow-hidden relative p-4 sm:p-8 mb-4'
    initial= {{opacity: 0, x: -200}}
    whileInView={{opacity: 1, x: 0}}
    transition={{duration: 0.5}}
    viewport={{once: true}}
    >
      <p className='text-2xl border-b-2 text-lightest-slate border-sec-color mb-4'>E-Commerce App</p>
      <figure>
      <img src={buy} alt="" className='mb-3 hover:grayscale' /> 
      <figcaption className="text-xs text-center text-slate"><span className='mr-4'>HTML</span> <span className='mr-4'>CSS</span> <span className='mr-4'>JAVASCRIPT</span> <span className='mr-4'>REACT</span> <span>REDUX</span></figcaption>
      </figure>
      <p className='mt-4 text-center text-lightest-slate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime a in, inventore repellendus distinctio sit commodi placeat impedit soluta ea quis quidem. Molestias cumque amet illo dolore. Inventore, aut labore?</p>
      <div className='mt-4 flex space-x-4'>
      <FontAwesomeIcon icon={faGithub} className='fa-lg text-slate hover:text-sec-color transition' />
      <FontAwesomeIcon icon={faLink} className='fa-lg text-slate hover:text-sec-color transition' />
      </div>
    </motion.div>

    <motion.div className='w-4/5 sm:w-2/4 mt-16 shadow-gray-600 hover:shadow-lg hover:shadow-gray-600 shadow project-container rounded transition flex flex-col items-center  mx-auto overflow-hidden relative p-4 sm:p-8 mb-4'
    initial= {{opacity: 0, x: 200}}
    whileInView={{opacity: 1, x: 0}}
    transition={{duration: 0.5}}
    viewport={{once: true}}
    >
      <p className='text-2xl border-b-2 text-lightest-slate border-sec-color mb-4'>Chat App</p>
      <figure>
      <img src={chat} alt="" className='mb-3 hover:grayscale' />
      <figcaption className="text-xs text-center text-slate"><span className='mr-4'>HTML</span> <span className='mr-4'>CSS</span> <span className='mr-4'>JAVASCRIPT</span> <span className='mr-4'>REACT</span> <span>REDUX</span></figcaption>
      </figure>
      <p className='mt-4 text-center text-lightest-slate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime a in, inventore repellendus distinctio sit commodi placeat impedit soluta ea quis quidem. Molestias cumque amet illo dolore. Inventore, aut labore?</p>
      <div className='mt-4 flex space-x-4'>
      <FontAwesomeIcon icon={faGithub} className='fa-lg text-slate hover:text-sec-color transition' />
      <FontAwesomeIcon icon={faLink} className='fa-lg text-slate hover:text-sec-color transition' />
      </div>
    </motion.div>
    </div>
  )
}

export default Projects
