import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


const Home = () => {

  return (
    <div id='home' className={`h-screen w-full flex justify-center  roboto px-5 lg:px-20`}>
      <div className={`flex text-white flex-col justify-center w-full introDiv`}>
      <p className={`text-lg mb-2 sm:mb-4 tracking-wide text-lightest-slate`}>Hi, my name is</p>
      <p className="font-bold lg:text-6xl md:text-5xl text-4xl  "><span className="text-color">Pius Ozegbe</span>
 <span className='block mt-2 sm:mt-4 mb-4 sm:mb-4 text-slate'>A Passionate Software Developer.</span></p>
      <p className='md:w-2/3 mb-6 xl:w-1/2 text-slate-300 text-slate text-base'>I bring ideas to life, from front-end design to back-end functionality. I'm a fullstack developer with a passion for building innovative and user-friendly software solutions. Explore my portfolio to see my work in action!</p>
      <div className='flex space-x-3'>
      <div className={`flex items-center mt-6 py-2 px-3 sm:px-7 cv_about pt-1 rounded button border border-sec-color transition`}>
      <p className='mt-1 text-white'>Download CV</p>
      </div>
      <a href="#about"><div className='flex items-center space-x-2 mt-6 hover:bg-sky-950 py-2 px-3 sm:px-7 pt-1 rounded button border border-sec-color transition'>
      <p className='mt-1 text-white'>About Me</p>
      <svg className="animate-bounce text-white w-6 h-6 mt-4"><FontAwesomeIcon icon={faArrowDown} /></svg>
      </div></a>
      </div>
    </div>
    </div>
  )
}

export default Home